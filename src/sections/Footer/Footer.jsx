import styles from './FooterStyles.module.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id='footer' className={styles.container}>
      <p>&#9426; {currentYear} Enrik Mazaj. <br></br>
      All Rights Reserved</p>
    </section>
  )
}

export default Footer
