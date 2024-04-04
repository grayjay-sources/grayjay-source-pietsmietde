# Set your key paths here
$PRIVATE_KEY_PATH = "$env:USERPROFILE\.ssh\id_rsa"
$PUBLIC_KEY_PATH = "$env:USERPROFILE\.ssh\id_rsa.pub"

# Convert public key to PKCS8 format
$PUBLIC_KEY_PKCS8 = ssh-keygen -f $PUBLIC_KEY_PATH -e -m pkcs8 | Select-Object -Skip 1 | Select-Object -SkipLast 1 | Out-String
Write-Host "This is your public key: '$PUBLIC_KEY_PKCS8'"

# Check if a parameter was provided
if ($args.Count -eq 0) {
    # No parameter provided, read from stdin
    $DATA = Get-Content -Path "CON"
} else {
    # Parameter provided, read from file
    $DATA = Get-Content -Path $args[0]
}

# Sign the data
$SIGNATURE = $DATA | openssl dgst -sha512 -sign $PRIVATE_KEY_PATH | ForEach-Object {
    # Convert the signature to Base64 using .NET method
    [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($_))
}
Write-Host "This is your signature: '$SIGNATURE'"
