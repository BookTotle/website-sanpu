import Layout from '../components/Layout'
import styles from '../styles/Resources.module.css'

export default function Resources() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>资料下载</h1>

        <section className={styles.resourceSection}>
          <h2>技术文档</h2>
          <div className={styles.resourceGrid}>
            <div className={styles.resourceCard}>
              <h3>采样技术规范</h3>
              <p>包含详细的土壤采样方法、步骤和注意事项</p>
              <button className={styles.downloadBtn}>下载文档</button>
            </div>
            <div className={styles.resourceCard}>
              <h3>实验分析手册</h3>
              <p>土壤理化性质分析方法和质量控制要求</p>
              <button className={styles.downloadBtn}>下载文档</button>
            </div>
            <div className={styles.resourceCard}>
              <h3>数据处理指南</h3>
              <p>数据录入、统计分析和质量评价方法</p>
              <button className={styles.downloadBtn}>下载文档</button>
            </div>
          </div>
        </section>

        <section className={styles.resourceSection}>
          <h2>表格模板</h2>
          <div className={styles.resourceGrid}>
            <div className={styles.resourceCard}>
              <h3>采样记录表</h3>
              <p>野外采样信息记录表格模板</p>
              <button className={styles.downloadBtn}>下载模板</button>
            </div>
            <div className={styles.resourceCard}>
              <h3>实验数据表</h3>
              <p>实验室分析数据记录表格</p>
              <button className={styles.downloadBtn}>下载模板</button>
            </div>
            <div className={styles.resourceCard}>
              <h3>质量评价表</h3>
              <p>土壤质量评价指标统计表</p>
              <button className={styles.downloadBtn}>下载模板</button>
            </div>
          </div>
        </section>

        <section className={styles.resourceSection}>
          <h2>研究资料</h2>
          <div className={styles.resourceGrid}>
            <div className={styles.resourceCard}>
              <h3>文献综述</h3>
              <p>土壤调查与评价相关研究进展</p>
              <button className={styles.downloadBtn}>下载资料</button>
            </div>
            <div className={styles.resourceCard}>
              <h3>技术报告</h3>
              <p>项目阶段性成果报告</p>
              <button className={styles.downloadBtn}>下载资料</button>
            </div>
            <div className={styles.resourceCard}>
              <h3>参考文献</h3>
              <p>相关研究文献目录</p>
              <button className={styles.downloadBtn}>下载资料</button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}