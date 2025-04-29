import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            土壤普查项目组
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">首页</Link></li>
          <li><Link href="/research">研究进展</Link></li>
          <li><Link href="/team">团队介绍</Link></li>
          <li><Link href="/resources">资料下载</Link></li>
          <li><Link href="/news">新闻动态</Link></li>
          <li><Link href="/contact">联系我们</Link></li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>联系方式</h3>
            <p>地址：湖北省武汉市洪山区狮子山街1号</p>
            <p>邮箱：soil_survey@mail.hzau.edu.cn</p>
            <p>电话：027-XXXXXXXX</p>
          </div>
          <div className={styles.footerSection}>
            <h3>快速链接</h3>
            <ul>
              <li><Link href="/research">研究进展</Link></li>
              <li><Link href="/team">团队介绍</Link></li>
              <li><Link href="/resources">资料下载</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          © 2024 华中农业大学资源与环境学院土壤普查项目组
        </div>
      </footer>
    </div>
  )
}