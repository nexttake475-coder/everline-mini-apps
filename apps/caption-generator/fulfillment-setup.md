# Paid Fulfillment Setup — Caption Generator V1

## Canonical offer

- Product: Caption Generator V1
- Price: $19 USD
- Delivery asset: `Everline-Caption-Generator-V1.zip`
- License: one purchaser; personal or internal business use
- Checkout channels: Shopify and Gumroad

Use the same ZIP, product name, price, and customer promise on both channels. This keeps fulfillment simple and prevents the two listings from drifting.

## Shopify

1. Open the existing Caption Generator product.
2. Confirm the price is `$19.00`.
3. Confirm it is configured as a non-physical product with shipping disabled.
4. In the digital-delivery app connected to the product, upload `Everline-Caption-Generator-V1.zip`.
5. Set delivery to send automatically after successful payment.
6. Use this download instruction: `Download the ZIP, unzip it, then open Caption-Generator.html in your browser.`
7. Place a test order and verify the confirmation page, delivery email, download, unzip, and app launch.

## Gumroad

1. Create or open the Caption Generator product.
2. Set the price to `$19`.
3. Upload `Everline-Caption-Generator-V1.zip` as the product content.
4. Use the prepared copy in `gumroad-product-copy.md`.
5. Add the same download instruction used on Shopify.
6. Publish only after completing a test purchase or test delivery.

## Required pre-launch test

Test both channels as a buyer:

- Checkout completes successfully.
- The receipt or delivery email arrives.
- The ZIP downloads without an access error.
- The archive contains exactly three files.
- `Caption-Generator.html` opens on desktop and mobile.
- Generate, reset, and all copy buttons work.
- The purchase price and product name match on both channels.

## Public repository boundary

Do not commit the buyer ZIP to this public repository. The repository may hold the source and operating documentation, but the checkout asset must remain in the delivery systems used by paying customers.
