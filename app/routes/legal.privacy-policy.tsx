import { BlockStack, Text } from "@shopify/polaris"

export default function PrivacyPolicy() {

    return (
        <div className="font-sans p-4">
            <BlockStack gap={"200"}>
                <Text as="h1" variant="heading2xl">Privacy Policy</Text>
                <Text as="p">This is a privacy policy for theshoptools.com. This policy is effective from July 21, 2024.</Text>
                <Text as="h2" variant="headingMd">Introduction</Text>
                <Text as="p">
                    Welcome to the theshoptools Privacy Policy. This document is essential for understanding how we handle your personal information as you use our services. It outlines our practices concerning the collection, use, and sharing of your data and informs you about your rights to privacy and how they are protected under the law.
                </Text>
                <Text as="h2" variant="headingMd">What information do we collect?</Text>
                <Text as="p">Our privacy policy is simple. We don't collect any personal information about you.<br/> We don't use cookies or any other tracking technology. We don't store your IP address or any other information about your device. We don't use any third-party services that might collect information about you. We don't share any information about you with anyone.</Text>
                <Text as="h2" variant="headingMd">How do we use your information?</Text>
                <Text as="p">We don't collect any information about you, so we don't use it for anything.</Text>
                <Text as="h2" variant="headingMd">Your Privacy Rights</Text>
                <Text as="p">Since we don't collect any information about you, you don't have to worry about your privacy rights.</Text>
            </BlockStack>
        </div>
    );
}