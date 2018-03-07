#!/bin/bash

curl "http://localhost:4741/change-password/" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PW}"'",
      "new": "'"${NEW_PW}"'"
    }
  }'

echo
