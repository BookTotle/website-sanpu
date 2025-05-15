import Layout from '../components/Layout'
import styles from '../styles/Team.module.css'
import { motion } from 'framer-motion'; // 引入 framer-motion 用于动画效果

const memberVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const achievementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' } }
};

export default function Team() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>团队介绍</h1>
        
        <section className={styles.teamSection}>
          <h2>研究生成员</h2>
          <div className={styles.membersGrid}>
            {[
              {
                name: "董国伟",
                title: "硕士研究生",
                research: "研究方向：土壤资源调查与评价",
                responsibilities: [
                  "土壤采样设计与实施",
                  "土壤资源数据库建设",
                  "土壤质量评价体系构建"
                ]
              },
              {
                name: "范鹏飞",
                title: "硕士研究生",
                research: "研究方向：土壤污染防治",
                responsibilities: [
                  "土壤重金属含量分析",
                  "污染土壤修复方案设计",
                  "环境风险评估"
                ]
              },
              {
                name: "朱建鑫",
                title: "硕士研究生",
                research: "研究方向：土壤质量监测",
                responsibilities: [
                  "土壤理化性质分析",
                  "监测数据统计分析",
                  "质量控制体系建设"
                ]
              },
              {
                name: "李泽楷",
                title: "硕士研究生",
                research: "研究方向：耕地质量评价",
                responsibilities: [
                  "耕地质量等级划分",
                  "GIS空间分析",
                  "评价指标体系构建"
                ]
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className={styles.memberCard}
                variants={memberVariants}变量= {memberVariants}
                initial="hidden"   初始=“隐藏”
                whileInView="visible"   whileInView =“可见”
                viewport={{ once: true }}   Viewport ={{once   一次: true   真正的}}
              >
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.title}>{member.title}</p>
                  <p className={styles.research}>{member.research}</p>
                  <div className={styles.details}>
                    <p>主要负责：</p>
                    <ul>
                      {member.responsibilities.map((responsibility, idx) => ({member   成员.responsibilities。Map ((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>   < / >节

        <section className={styles.achievementsSection}><节className = {styles   风格.achievementsSection} >
          <h2>团队成果</h2>
          <div className={styles.achievements}>
            <motion.div
              className={styles.achievementCard}
              variants={achievementVariants}变量= {achievementVariants}
              initial="hidden"   初始=“隐藏”
              whileInView="visible"   whileInView =“可见”
              viewport={{ once: true }}   Viewport ={{once   一次: true   真正的}}
            >
              <h3>科研成果</h3>
              <ul>
                <li>发表SCI论文3篇</li>
                <li>国内核心期刊论文5篇</li>
                <li>申请专利2项</li>
                <li>参与编写技术规范2部</li>
              </ul>
            </motion.div>
            <motion.div
              className={styles.achievementCard}
              variants={achievementVariants}变量= {achievementVariants}
              initial="hidden"   初始=“隐藏”
              whileInView="visible"   whileInView =“可见”
              viewport={{ once: true }}   Viewport ={{once   一次: true   真正的}}
            >
              <h3>项目进展</h3>
              <ul>
                <li>完成采样点位2000个</li>
                <li>建立土壤数据库1个</li>
                <li>完成技术报告3份</li>
                <li>开展培训会议5次</li>
              </ul>
            </motion.div>
          </div>
        </section>   < / >节
      </div>
    </Layout>   > < /布局
  )
}
