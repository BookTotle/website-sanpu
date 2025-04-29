import Layout from '../components/Layout'
import styles from '../styles/Research.module.css'

export default function Research() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>研究进展</h1>
        
        <section className={styles.progressSection}>
          <h2>项目进度</h2>
          <div className={styles.progressGrid}>
            <div className={styles.progressCard}>
              <h3>采样进度</h3>
              <ul>
                <li>已完成县域：15个</li>
                <li>采样点位：2000个</li>
                <li>样品数量：6000份</li>
                <li>完成比例：60%</li>
              </ul>
            </div>
            <div className={styles.progressCard}>
              <h3>实验分析</h3>
              <ul>
                <li>已分析样品：4500份</li>
                <li>完成项目：pH、有机质、全氮</li>
                <li>进行中：重金属含量分析</li>
                <li>完成比例：75%</li>
              </ul>
            </div>
            <div className={styles.progressCard}>
              <h3>数据处理</h3>
              <ul>
                <li>数据录入：80%</li>
                <li>数据校验：65%</li>
                <li>统计分析：50%</li>
                <li>报告撰写：30%</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.methodSection}>
          <h2>研究方法</h2>
          <div className={styles.methodContent}>
            <div className={styles.methodCard}>
              <h3>野外采样</h3>
              <p>采用分层随机抽样法，结合GPS定位系统，确保采样点位的科学性和代表性。主要包括：</p>
              <ul>
                <li>表层土壤采样（0-20cm）</li>
                <li>剖面采样（0-100cm）</li>
                <li>专项调查采样</li>
              </ul>
            </div>
            <div className={styles.methodCard}>
              <h3>实验分析</h3>
              <p>按照国家标准方法进行土壤理化性质分析，包括：</p>
              <ul>
                <li>基础理化性质：pH、有机质、全氮、有效磷</li>
                <li>重金属含量：铜、锌、铅、镉等</li>
                <li>土壤肥力指标分析</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.resultsSection}>
          <h2>初步成果</h2>
          <div className={styles.resultsContent}>
            <div className={styles.resultCard}>
              <h3>土壤类型分布</h3>
              <p>研究区域主要分布水稻土、黄棕壤和紫色土，其中：</p>
              <ul>
                <li>水稻土占45%</li>
                <li>黄棕壤占30%</li>
                <li>紫色土占15%</li>
                <li>其他类型占10%</li>
              </ul>
            </div>
            <div className={styles.resultCard}>
              <h3>土壤质量评价</h3>
              <p>初步评价结果显示：</p>
              <ul>
                <li>优质耕地：25%</li>
                <li>中等耕地：45%</li>
                <li>一般耕地：20%</li>
                <li>待改良耕地：10%</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}