// Layout组件：网站的主要布局组件，包含导航栏和页脚
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* 页面头部配置 */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 导航栏部分 */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            土壤普查项目组
          </Link>
        </div>
        {/* 导航链接列表 */}
        <ul className={styles.navLinks}>
          <li><Link href="/">首页</Link></li>
          <li><Link href="/research">研究进展</Link></li>
          <li><Link href="/team">团队介绍</Link></li>
          <li><Link href="/resources">资料下载</Link></li>
          <li><Link href="/news">新闻动态</Link></li>
          <li><Link href="/contact">联系我们</Link></li>
        </ul>
      </nav>

      {/* 主要内容区域 */}
      <main>{children}</main>

      {/* 页脚部分 */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* 联系方式部分 */}
          <div className={styles.footerSection}>
            <h3>联系方式</h3>
            <p>地址：湖北省武汉市洪山区狮子山街1号</p>
            <p>邮箱：soil_survey@mail.hzau.edu.cn</p>
            <p>电话：027-XXXXXXXX</p>
          </div>
          {/* 快速链接部分 */}
          <div className={styles.footerSection}>
            <h3>快速链接</h3>
            <ul>
              <li><Link href="/research">研究进展</Link></li>
              <li><Link href="/team">团队介绍</Link></li>
              <li><Link href="/resources">资料下载</Link></li>
            </ul>
          </div>
        </div>
        {/* 版权信息 */}
        <div className={styles.copyright}>
          © 2024 华中农业大学资源与环境学院土壤普查项目组
        </div>
      </footer>
    </div>
  )
}