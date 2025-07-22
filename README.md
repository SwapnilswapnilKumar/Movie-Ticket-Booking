This is the live link of the project Cinema Cloud (Movie Ticket Booking ) ->
https://cinemacloud.vercel.app/


Overview of this project :
  1. This is a MERN stack project.
  2. As the name suggests this project allows users to book movie tickets in real time.
  3. Users can login or sign up by email address and password or directly login by their google account.
  4. User can select movie, date, time, seat number and can proceed for checkout process.
  5. User can complete the payment process.
  6. After completion of successful payment user is redirected to the myBooking page where he/she can see his/her bookings.
  7. As soon as the payment process is completed successfully user gets the confirmation mail from cinemacloud2025@gmail.com
  8. User can download the receipt from the myBooking page.
  9. User-friendly, responsive UX design for seamless browsing and booking across devices.



Detailed explaination about which technologies I have used : 
As this is a MERN stack project so :
M : MongoDb Atlas for the database
E : Express for the backend
R : React JS for frontend
N : Node JS

-> Authentication and autherization : I have used Clerk development mode (ref : https://clerk.com/docs) which allows user to sign up , login or conitnue with google account.
-> React Routes : For seamless navigation I have used React Routes
-> Payment : For secure payment I have used stripe test mode (ref : https://docs.stripe.com)
-> Confirmation mail : To send confirmation mail I have used Nodemailer and Brevo (ref : https://www.brevo.com) 
-> Stripe Webhooks : To tell backend about different events of Stripe like payment succeess or failure
-> Inngest : For Scheduling tasks, Delaying actions (e.g., timeouts), Responding to events from external systems (like Clerk or Stripe), Handling long-running tasks without blocking the server (ref : https://www.inngest.com/docs)
-> Mongodb Atlas : Is used to store user, booking and show data
-> Vercel : Deployed the backend and frontent on Vercel





To run this project on localhost following credentials or environment variables will be required : 
in backend : MONGODB_URI
            CLERK_PUBLISHABLE_KEY
            CLERK_SECRET_KEY
            STRIPE_PUBLISHABLE_KEY
            STRIPE_SECRET_KEY
            STRIPE_WEBHOOK_SECRET
            INNGEST_EVENT_KEY
            INNGEST_SIGNING_KEY
            SENDER_EMAIL
            SMTP_USER
            SMTP_PASS

in frontend : VITE_CLERK_PUBLISHABLE_KEY
              VITE_CURRENCY
              VITE_BASE_URL
              VITE_TMDB_IMAGE_BASE_URL


References : 
  https://clerk.com/docs
  https://docs.stripe.com
  https://www.brevo.com
  https://www.inngest.com/docs
  




Future improvements : 
-> Creation of admin portal where admin can schedule shows 
-> Transition to test mode to live mode of stripe

Note : To test the payment use these card details :
                card Number : 4242 4242 4242 4242
                expiray date : any future date
                cvc : any
                cardholder name: any
                country or region : any

Some glimpses of the project :
                
<img width="1907" height="1018" alt="Screenshot 2025-07-22 191008" src="https://github.com/user-attachments/assets/229465e0-6ab4-4315-ab0f-67d58e55fa55" />

<img width="1913" height="975" alt="Screenshot 2025-07-22 191030" src="https://github.com/user-attachments/assets/ad599574-6402-4690-a209-adfcecf7bd71" />

<img width="1915" height="969" alt="Screenshot 2025-07-22 191042" src="https://github.com/user-attachments/assets/1c4a5c0d-7949-4e05-8084-66941dd638c5" />

<img width="1902" height="1018" alt="Screenshot 2025-07-22 191119" src="https://github.com/user-attachments/assets/3369c8b9-d8c0-4c93-b7fc-491001b97e29" />

<img width="1904" height="942" alt="Screenshot 2025-07-22 191428" src="https://github.com/user-attachments/assets/e4f9e4c2-9dce-416f-8df4-f349c2ecb2f3" />

<img width="1907" height="931" alt="Screenshot 2025-07-22 191526" src="https://github.com/user-attachments/assets/069c3054-2400-4e7d-ac19-3f8d634f6879" />

<img width="1910" height="935" alt="Screenshot 2025-07-22 191608" src="https://github.com/user-attachments/assets/6bc2eb0f-f519-4f5a-8e48-c69f544c0237" />
