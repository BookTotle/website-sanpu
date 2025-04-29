import Layout from '../components/Layout'
import styles from '../styles/Team.module.css'
import Image from 'next/image'

export default function Team() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>团队介绍</h1>
        
        <section className={styles.teamSection}>
          <h2>研究生成员</h2>
          <div className={styles.membersGrid}>
            <div className={styles.memberCard}>
              <div className={styles.memberInfo}>
                <h3>董国伟</h3>
                <p className={styles.title}>硕士研究生</p>
                <p className={styles.research}>研究方向：土壤资源调查与评价</p>
                <div className={styles.details}>
                  <p>主要负责：</p>
                  <ul>
                    <li>土壤采样设计与实施</li>
                    <li>土壤资源数据库建设</li>
                    <li>土壤质量评价体系构建</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.memberCard}>
              <div className={styles.memberInfo}>
                <h3>范鹏飞</h3>
                <p className={styles.title}>硕士研究生</p>
                <p className={styles.research}>研究方向：土壤污染防治</p>
                <div className={styles.details}>
                  <p>主要负责：</p>
                  <ul>
                    <li>土壤重金属含量分析</li>
                    <li>污染土壤修复方案设计</li>
                    <li>环境风险评估</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.memberCard}>
              <div className={styles.memberInfo}>
                <h3>朱建鑫</h3>
                <p className={styles.title}>硕士研究生</p>
                <p className={styles.research}>研究方向：土壤质量监测</p>
                <div className={styles.details}>
                  <p>主要负责：</p>
                  <ul>
                    <li>土壤理化性质分析</li>
                    <li>监测数据统计分析</li>
                    <li>质量控制体系建设</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.memberCard}>
              <div className={styles.memberInfo}>
                <h3>李泽楷</h3>
                <p className={styles.title}>硕士研究生</p>
                <p className={styles.research}>研究方向：耕地质量评价</p>
                <div className={styles.details}>
                  <p>主要负责：</p>
                  <ul>
                    <li>耕地质量等级划分</li>
                    <li>GIS空间分析</li>
                    <li>评价指标体系构建</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.achievementsSection}>
          <h2>团队成果</h2>
          <div className={styles.achievements}>
            <div className={styles.achievementCard}>
              <h3>科研成果</h3>
              <ul>
                <li>发表SCI论文3篇</li>
                <li>国内核心期刊论文5篇</li>
                <li>申请专利2项</li>
                <li>参与编写技术规范2部</li>
              </ul>
            </div>
            <div className={styles.achievementCard}>
              <h3>项目进展</h3>
              <ul>
                <li>完成采样点位2000个</li>
                <li>建立土壤数据库1个</li>
                <li>完成技术报告3份</li>
                <li>开展培训会议5次</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}