import reflex as rx

def navbar():
    return rx.flex(
        rx.link(
            rx.image(src="/favicon.ico"),
            href="/"
        ),
        rx.box(
            rx.hstack(
                rx.link('About', href="/about", _hover={"text_decoration": "none"}),
                rx.link('Prime Numbers', href="/prime-numbers", _hover={"text_decoration": "none"}),
                rx.link('Encryption', href="/encryption", _hover={"text_decoration": "none"}),
                spacing="3em"
            )
        ),
        justify_content="space-between",
        align_items="center",
        padding_x="5em",
        padding_y= "1em",
        width="100%",
    )