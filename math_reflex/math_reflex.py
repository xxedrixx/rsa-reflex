import reflex as rx
import math

class NumberInputState(rx.State):
    p: int
    is_prime: bool = False  # New state variable to store if 'p' is prime or not

    def prime(self, num):
        if num < 2:  
            return False  
        for i in range(2, int(math.sqrt(num)) + 1):  
            if num % i == 0:  
                return False  
        return True 

    def set_p(self, value):     # Use built-in setter to update state
        self.p = int(value)
        self.is_prime = self.prime(self.p)
 
def index():
    return rx.vstack(
        rx.number_input(
            on_change=NumberInputState.set_p,
        ),
        rx.cond(
            NumberInputState.is_prime,
            rx.text(NumberInputState.p," is prime", color="green"),
            rx.text(NumberInputState.p, " is NOT prime", color="red"),
        )
    )

def about():
    return rx.text("This is a simple project to try out reflex")


app = rx.App()
app.add_page(index)
app.add_page(about, route="/about")
app.compile()