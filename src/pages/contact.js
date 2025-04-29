import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>联系我们</h1>

        <div className={styles.contactGrid}>
          <section className={styles.contactInfo}>
            <h2>联系方式</h2>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <h3>地址</h3>
                <p>湖北省武汉市洪山区狮子山街1号</p>
                <p>华中农业大学资源与环境学院</p>
              </div>
              <div className={styles.infoItem}>
                <h3>电话</h3>
                <p>办公室：027-XXXXXXXX</p>
                <p>实验室：027-XXXXXXXX</p>
              </div>
              <div className={styles.infoItem}>
                <h3>电子邮箱</h3>
                <p>soil_survey@mail.hzau.edu.cn</p>
              </div>
            </div>
          </section>

          <section className={styles.messageForm}>
            <h2>留言咨询</h2>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">姓名</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">邮箱</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">主题</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">留言内容</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>提交留言</button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  )
}