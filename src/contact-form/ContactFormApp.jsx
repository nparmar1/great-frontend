import "./styles.css";
const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

export default function ContactFormApp() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const data = e.target;
        const dataFrom = new FormData(data);

        const response = await fetch(SUBMIT_URL, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: dataFrom.get("name"),
            email: dataFrom.get("email"),
            message: dataFrom.get("message"),
          }),
        });

        const text = await response.text();
        alert(text);
      }}
    >
      <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" name="name" type="text" />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input id="email-input" name="email" type="text" />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea id="message-input" name="message" />
      </div>
      <button>Send</button>
    </form>
  );
}
