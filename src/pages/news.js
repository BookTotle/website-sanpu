import Layout from '../components/Layout'
import styles from '../styles/News.module.css'

export default function News() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>新闻动态</h1>

        <section className={styles.newsSection}>
          <div className={styles.newsGrid}>
            <article className={styles.newsCard}>
              <div className={styles.newsDate}>2024年1月25日</div>
              <h2>2024年春季土壤采样工作启动会议顺利召开</h2>
              <p className={styles.summary}>
                项目组召开2024年春季土壤采样工作启动会议，详细部署采样计划，明确任务分工，为新一轮采样工作做好充分准备。
              </p>
              <div className={styles.details}>
                <p>会议要点：</p>
                <ul>
                  <li>确定采样区域和点位布设方案</li>
                  <li>讨论采样技术规范更新内容</li>
                  <li>安排人员分工和时间进度</li>
                  <li>强调质量控制措施</li>
                </ul>
              </div>
              <button className={styles.readMore}>阅读更多</button>
            </article>

            <article className={styles.newsCard}>
              <div className={styles.newsDate}>2024年1月15日</div>
              <h2>土壤样品分析实验室扩建完成</h2>
              <p className={styles.summary}>
                为提升样品分析效率，项目组实验室完成扩建工程，新增多台先进分析设备，显著提升分析能力。
              </p>
              <div className={styles.details}>
                <p>扩建内容：</p>
                <ul>
                  <li>新增原子吸收分光光度计2台</li>
                  <li>扩充样品前处理区域</li>
                  <li>升级数据采集系统</li>
                </ul>
              </div>
              <button className={styles.readMore}>阅读更多</button>
            </article>

            <article className={styles.newsCard}>
              <div className={styles.newsDate}>2024年1月10日</div>
              <h2>项目组参加全国土壤普查工作研讨会</h2>
              <p className={styles.summary}>
                项目组成员赴北京参加全国土壤普查工作研讨会，交流工作经验，学习先进技术方法。
              </p>
              <div className={styles.details}>
                <p>会议收获：</p>
                <ul>
                  <li>了解全国土壤普查最新进展</li>
                  <li>掌握新型采样设备使用方法</li>
                  <li>建立区域合作关系</li>
                </ul>
              </div>
              <button className={styles.readMore}>阅读更多</button>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  )
}