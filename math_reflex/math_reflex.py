import reflex as rx
import math

class NumberInputState(rx.State):
    p: int
    q: int
    n: int 
    L: int
    r: int 
    s: int
    message: str

    def prime(num):  
        if num < 2:  
            return False  
        for i in range(2, int(math.sqrt(num)) + 1):  
            if num % i == 0:  
                return False  
        return True 
    
    @rx.var
    def get_p(self):
        if not NumberInputState.prime(NumberInputState.p):
            return (f"{NumberInputState.p} is NOT prime")


def index():
    return rx.vstack(
        rx.number_input(
            on_change=NumberInputState.set_p,
        ),
        rx.text("p is ", NumberInputState.p),
        rx.cond(
            NumberInputState.p == NumberInputState.prime,
            rx.text(NumberInputState.p,"is NOT prime", color="red"),
            rx.text(NumberInputState.p, "is prime", color="green"),
            
            
        )
    )

def about():
    return rx.text("This is a simple project to try out reflex")


app = rx.App()
app.add_page(index)
app.add_page(about, route="/about")
app.compile()