import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
     <form action="https://formspree.io/f/xbljlkjl" method='post'>
      <h1 className="sectionTitle">Contact</h1>
      <div className="formGroup">
        <label htmlFor="name" hidden>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Name"
        ></input>
      </div>
      <div className="formGroup">
        <label htmlFor="Email" hidden>
          Email
        </label>
        <input
          type="text"
          name="Email"
          id="Email"
          required
          placeholder="Email"
        ></input>
      </div>
      <div className="formGroup">
        <label htmlFor="Message" hidden>
          Message
        </label>
        <textarea
          name="Message"
          id="Message"
          required
          placeholder="Message"
        ></textarea>
      </div>
      <input type="submit" className="hover btn" value="Submit"></input>
    </form>
    </section>
  );
}

export default Contact;
