# Parameters
$jsFilePath = $args[0]
$configFilePath = $args[1]

# Decode and save the private key to a temporary file
$encodedPrivateKey = $env:SIGNING_PRIVATE_KEY
$tempPrivateKeyPath = "tmp_private_key.pem"
Set-Content -Path $tempPrivateKeyPath -Value ([System.Convert]::FromBase64String($encodedPrivateKey))

# Validate private key
try {
    Get-PublicKey -FilePath $tempPrivateKeyPath -ErrorAction Stop
} catch {
    Write-Host "Invalid private key."
    Remove-Item -Path $tempPrivateKeyPath -Force
    exit 1
}

# Generate signature for the provided JS file
$signature = Get-FileHash -Path $jsFilePath -Algorithm SHA512 -Signer $tempPrivateKeyPath | Select-Object -ExpandProperty Hash | ConvertTo-Blob -Encoding Base64

# Extract public key from the temporary private key file
$publicKey = Get-PublicKey -FilePath $tempPrivateKeyPath | 
             ConvertTo-Certificate -CertType X509 -SubjectKeyIdentifier | 
             Export-Certificate -CertStoreLocation Cert:\LocalMachine\My | 
             Get-Content -Raw | 
             Select-String -Pattern '(?<=-----BEGIN CERTIFICATE-----)(.*?)(?=-----END CERTIFICATE-----)' | 
             ForEach-Object { $_.Matches.Groups[1].Value } | 
             Out-Raw -Encoding Byte | 
             ConvertFrom-Blob -Encoding Base64

Write-Host "PUBLIC_KEY: $publicKey"

# Remove temporary key files
Remove-Item -Path $tempPrivateKeyPath -Force

# Update "scriptSignature" and "scriptPublicKey" fields in Config JSON
$jsonConfig = Get-Content -Path $configFilePath -Raw | ConvertFrom-Json
$jsonConfig.scriptSignature = $signature
$jsonConfig.scriptPublicKey = $publicKey
Set-Content -Path $configFilePath -Value ($jsonConfig | ConvertTo-Json -Depth 10)
