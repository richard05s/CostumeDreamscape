# # Jalankan perintah deploy
bash deploy-local-ledger.sh

# Deploy canisters
dfx deploy internet_identity
dfx deploy dfinity_js_backend
dfx generate dfinity_js_backend
dfx deploy dfinity_js_frontend
