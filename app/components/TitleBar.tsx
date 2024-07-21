import { Image, InlineGrid, Link, Text } from "@shopify/polaris";

export default function TitleBar({ title }: { title: string }) {
    return (
        <InlineGrid gap={"400"}>
            <Image width={"150"} source="https://cdn.shopify.com/s/files/1/0638/3750/3669/files/theshoptools_1.svg?v=1721548657" alt="The Shop Tools Logo" />
        </InlineGrid>
    );
}