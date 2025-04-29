import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>湖北省第三次土壤普查 - 华中农业大学研究团队</title>
        <meta name="description" content="华中农业大学资源与环境学院土壤普查项目组官方网站" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>湖北省第三次土壤普查</h1>
          <p className={styles.subtitle}>华中农业大学资源与环境学院土壤普查项目组</p>
        </section>

        <section className={styles.overview}>
          <h2>项目概述</h2>
          <p>本项目由华中农业大学资源与环境学院承担，旨在全面摸清湖北省土壤资源现状，建立完善的土壤数据库，为农业可持续发展提供科学依据。</p>
          
          <div className={styles.keyPoints}>
            <h3>研究重点</h3>
            <ul>
              <li>土壤资源调查与评价</li>
              <li>土壤质量监测与分析</li>
              <li>耕地质量等级划分</li>
              <li>土壤污染防治对策</li>
              <li>土壤资源保护建议</li>
            </ul>
          </div>
        </section>

        <section className={styles.news}>
          <h2>最新动态</h2>
          <div className={styles.newsGrid}>
            <article className={styles.newsItem}>
              <h3>2024年春季土壤采样工作启动</h3>
              <p>项目组已完成前期准备工作，即将开展新一轮土壤采样调查。</p>
              <span className={styles.date}>2024-01-25</span>
            </article>
            <article className={styles.newsItem}>
              <h3>实验室分析工作进展</h3>
              <p>2023年冬季采集的土壤样品已完成80%的理化性质分析。</p>
              <span className={styles.date}>2024-01-20</span>
            </article>
          </div>
        </section>

        <section className={styles.team}>
          <h2>研究团队</h2>
          <div className={styles.teamMembers}>
            <div className={styles.member}>
              <h3>董国伟</h3>
              <p>研究方向：土壤资源调查与评价</p>
            </div>
            <div className={styles.member}>
              <h3>范鹏飞</h3>
              <p>研究方向：土壤污染防治</p>
            </div>
            <div className={styles.member}>
              <h3>朱建鑫</h3>
              <p>研究方向：土壤质量监测</p>
            </div>
            <div className={styles.member}>
              <h3>李泽楷</h3>
              <p>研究方向：耕地质量评价</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}