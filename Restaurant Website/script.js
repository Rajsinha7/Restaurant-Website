// Add event listener to navbar toggler
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Add animation to hero section
const heroSection = document.querySelector('.hero-section');
heroSection.classList.add('animate__animated', 'animate__fadeIn');

// Add animation to about section
const aboutSection = document.querySelector('.about-section');
aboutSection.classList.add('animate__animated', 'animate__fadeInUp');

// Add animation to menu section
const menuSection = document.querySelector('.menu-section');
menuSection.classList.add('animate__animated', 'animate__fadeInUp');

// Add animation to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.classList.add('animate__animated', 'animate__flipInX');
});

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);







const Button = document.querySelector('#dev');

// Add event listener to the learn more button
Button.addEventListener('click', () => {
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <html>
      <head>
        <title>About Developer</title>
        <style>
         body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
           background-image: url("https://img.freepik.com/free-photo/3d-dark-grunge-display-background-with-smoky-atmosphere_1048-16218.jpg");
            background-size: cover;

        }
            .txt{
            color: #f2f2f2;
            font-size: 40px;
            }
        
            .abt{
            color: #f2f2f2 ;

            }
        </style>
      </head>
      <body>
        <h1 class="abt">About Me</h1>
        <p class="txt">I'm Raj Sinha, a programmer and full-stack developer with expertise in Java development and frontend technologies. I design and implement efficient solutions, driven by a passion for innovation and problem-solving. With a strong foundation in Java, I also excel in crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript and Bootstrap5. I stay updated with the latest technologies and deliver high-quality work through meticulous attention to detail. I'm a collaborative team player who strives for exceptional results.</p>
        
      </body>
    </html>
  `);
  newWindow.document.close();
});


const buyNowButtons = document.querySelectorAll('.btn');

// Add event listener to each buy now button
buyNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Create a new window
    const newWindow = window.open('', '_blank', 'width=500,height=700');

    // Write content to the new window
    newWindow.document.write(`
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
           background-image: url("https://images.unsplash.com/photo-1552566626-52f8b828add9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D");
            background-size: cover;
        }
        .payment-container {
          width: 80%;
          margin: 40px auto;
          padding: 20px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .payment-header {
          background-color: #4CAF50;
          color: #fff;
          padding: 10px;
          border-radius: 10px 10px 0 0;
        }
        .payment-method {
          margin-top: 20px;
        }
        .payment-method select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .payment-details {
          margin-top: 20px;
        }
        .payment-details input[type="text"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .payment-button {
          background-color: #4CAF50;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .payment-button:hover {
          background-color: #3e8e41;
        }
      </style>
      <div class="payment-container">
        <div class="payment-header">
          <h2>Payment Options</h2>
        </div>
        <form>
          <div class="payment-method">
            <label>Payment Method:</label>
            <select id="payment-method">
               <option value="upi">Select</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
            </select>
          </div>
          <div id="upi-payment" style="display: none;" class="payment-details">
            <label>UPI ID:</label>
            <input type="text" id="upi-id" />
            <button class="payment-button" onclick="makePayment()">Pay with UPI</button>
          </div>
          <div id="cash-payment" style="display: none;" class="payment-details">
            <p>Cash payment details...</p>
            <button class="payment-button" onclick="makePayment()">Make Payment</button>
          </div>
          <div id="card-payment" style="display: none;" class="payment-details">
            <label>Card Number:</label>
            <input type="text" id="card-number" />
            <label>Expiry Date:</label>
            <input type="text" id="expiry-date" />
            <label>CVV:</label>
            <input type="text" id="cvv" />
            <button class="payment-button" onclick="makePayment()">Pay with Card</button>
          </div>
        </form>
      </div>

      <script>
        const paymentMethod = document.getElementById('payment-method');
        const upiPayment = document.getElementById('upi-payment');
        const cashPayment = document.getElementById('cash-payment');
        const cardPayment = document.getElementById('card-payment');

        paymentMethod.addEventListener('change', () => {
          if (paymentMethod.value === 'upi') {
            upiPayment.style.display = 'block';
            cashPayment.style.display = 'none';
            cardPayment.style.display = 'none';
          } else if (paymentMethod.value === 'cash') {
            upiPayment.style.display = 'none';
            cashPayment.style.display = 'block';
            cardPayment.style.display = 'none';
          } else if (paymentMethod.value === 'card') {
            upiPayment.style.display = 'none';
            cashPayment.style.display = 'none';
            cardPayment.style.display = 'block';
          }
        });

        function makePayment() {
          alert('Transaction Successful');
          alert('Your food item has been Ordered');
          window.close();
        }
      </script>
    `);

    //

    // Close the document stream
    newWindow.document.close();
  });
});
