// 研究进展页面：展示项目的研究方法和成果
import Layout from '../components/Layout'
import styles from '../styles/Research.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// 注册 Chart.js 组件
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Research() {
  // 采样进度数据
  const samplingProgress = 60;
  // 实验分析进度数据
  const analysisProgress = 75;
  // 数据处理进度数据
  const dataProcessingProgress = 50;

  // 土壤类型分布数据
  const soilTypeData = {
    labels: ['水稻土', '黄棕壤', '紫色土', '其他类型'],
    datasets: [
      {
        label: '土壤类型分布',
        data: [45, 30, 15, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // 土壤质量评价数据
  const soilQualityData = {
    labels: ['优质耕地', '中等耕地', '一般耕地', '待改良耕地'],
    datasets: [
      {
        label: '土壤质量评价',
        data: [25, 45, 20, 10],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>研究进展</h1>

        {/* 项目进度展示部分 */}
        <section className={styles.progressSection}>
          <h2>项目进度</h2>
          <div className={styles.progressGrid}>
            <div className={styles.progressCard}>
              <h3>采样进度</h3>
              <CircularProgressbar
                value={samplingProgress}
                text={`${samplingProgress}%`}
                styles={buildStyles({
                  pathColor: `rgba(46, 125, 50, ${samplingProgress / 100})`,
                  textColor: '#2E7D32',
                  trailColor: '#d6d6d6',
                })}
              />
              <ul>
                <li>已完成县域：15个</li>
                <li>采样点位：2000个</li>
                <li>样品数量：6000份</li>
                <li>完成比例：{samplingProgress}%</li>
              </ul>
            </div>
            <div className={styles.progressCard}>
              <h3>实验分析</h3>
              <CircularProgressbar
                value={analysisProgress}
                text={`${analysisProgress}%`}
                styles={buildStyles({
                  pathColor: `rgba(46, 125, 50, ${analysisProgress / 100})`,
                  textColor: '#2E7D32',
                  trailColor: '#d6d6d6',
                })}
              />
              <ul>
                <li>已分析样品：4500份</li>
                <li>完成项目：pH、有机质、全氮</li>
                <li>进行中：重金属含量分析</li>
                <li>完成比例：{analysisProgress}%</li>
              </ul>
            </div>
            <div className={styles.progressCard}>
              <h3>数据处理</h3>
              <CircularProgressbar
                value={dataProcessingProgress}
                text={`${dataProcessingProgress}%`}
                styles={buildStyles({
                  pathColor: `rgba(46, 125, 50, ${dataProcessingProgress / 100})`,
                  textColor: '#2E7D32',
                  trailColor: '#d6d6d6',
                })}
              />
              <ul>
                <li>数据录入：80%</li>
                <li>数据校验：65%</li>
                <li>统计分析：{dataProcessingProgress}%</li>
                <li>报告撰写：30%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 研究方法说明部分 */}
        <section className={styles.methodSection}>
          <h2>研究方法</h2>
          <div className={styles.methodContent}>
            <div className={styles.methodCard}>
              <h3>野外采样</h3>
              <p>
                野外采样是整个研究的基础环节，我们采用分层随机抽样法，结合先进的 GPS 定位系统，确保采样点位的科学性和代表性。这种方法能够充分考虑到研究区域内土壤类型、地形地貌、土地利用等因素的差异，从而获取更全面、准确的土壤样本。具体包括以下几种采样方式：
              </p>
              <ul>
                <li>
                  <strong>表层土壤采样（0 - 20cm）</strong>：主要采集土壤表层的样本，用于分析土壤的基本理化性质，如酸碱度、有机质含量、养分状况等。这些指标对于了解土壤的肥力水平和生态功能具有重要意义。
                </li>
                <li>
                  <strong>剖面采样（0 - 100cm）</strong>：通过挖掘土壤剖面，采集不同深度的土壤样本，能够深入了解土壤的垂直结构和演化过程。这对于研究土壤的形成机制、土壤水分运动、土壤养分循环等方面具有重要价值。
                </li>
                <li>
                  <strong>专项调查采样</strong>：针对特定的研究目的或问题，进行有针对性的采样。例如，在研究土壤污染状况时，会在可能受到污染的区域进行加密采样；在研究土壤微生物群落时，会采集不同植被覆盖下的土壤样本。
                </li>
              </ul>
            </div>
            <div className={styles.methodCard}>
              <h3>实验分析</h3>
              <p>
                实验分析是对采集到的土壤样本进行详细检测和分析的过程，我们严格按照国家标准方法进行土壤理化性质分析，确保分析结果的准确性和可靠性。具体分析项目包括：
              </p>
              <ul>
                <li>
                  <strong>基础理化性质</strong>：包括 pH、有机质、全氮、有效磷等指标。这些指标是衡量土壤肥力和质量的重要参数，对于指导农业生产、土壤改良和生态环境保护具有重要意义。
                </li>
                <li>
                  <strong>重金属含量</strong>：检测土壤中铜、锌、铅、镉等重金属的含量。随着工业化和城市化的发展，土壤重金属污染问题日益严重，检测土壤重金属含量对于评估土壤环境质量、保障农产品安全具有重要意义。
                </li>
                <li>
                  <strong>土壤肥力指标分析</strong>：除了基础理化性质外，还会分析土壤的其他肥力指标，如土壤阳离子交换量、土壤有效钾含量等。这些指标能够更全面地反映土壤的肥力状况，为合理施肥和土壤管理提供科学依据。
                </li>
              </ul>
            </div>
          </div>
        </section>   < / >节

        {/* 初步成果展示部分 */}
        <section className={styles.resultsSection}><节className = {styles.resultsSection} >
          <h2>初步成果</h2>
          <div className={styles.resultsContent}>
            <div className={styles.resultCard}>
              <h3>土壤类型分布</h3>
              <Doughnut data={soilTypeData} />
              <p>
                通过对研究区域内的土壤样本进行分析，我们发现该区域主要分布有水稻土、黄棕壤和紫色土等土壤类型，具体分布情况如下：
              </p>
              <ul>
                <li>水稻土占 45%，是该区域最主要的土壤类型，主要分布在地势平坦、水源充足的地区，适合水稻等农作物的种植。</li>
                <li>黄棕壤占 30%，主要分布在低山丘陵地区，土壤肥力较高，适合多种农作物和林木的生长。</li>
                <li>紫色土占 15%，是一种由紫色砂岩和页岩风化形成的土壤，富含钾、磷等养分，土壤肥力较高。</li>
                <li>其他类型占 10%，包括一些特殊的土壤类型，如潮土、红壤等。</li>
              </ul>
            </div>
            <div className={styles.resultCard}>
              <h3>土壤质量评价</h3>
              <Doughnut data={soilQualityData} />
              <p>
                根据土壤理化性质分析结果和相关评价标准，我们对研究区域内的土壤质量进行了初步评价，评价结果显示：
              </p>
              <ul>
                <li>优质耕地占 25%，这些耕地土壤肥力高、结构良好、无污染，适合种植高品质的农作物。</li>
                <li>中等耕地占 45%，这些耕地土壤肥力中等，需要通过合理施肥、改良土壤结构等措施来提高土壤质量。</li>
                <li>一般耕地占 20%，这些耕地土壤肥力较低，存在一定的限制因素，如土壤酸碱度不适宜、养分含量不足等，需要采取针对性的改良措施。</li>
                <li>待改良耕地占 10%，这些耕地土壤质量较差，存在严重的污染、退化等问题，需要进行大规模的土壤修复和改良工作。</li>
              </ul>
            </div>
          </div>
        </section>   < / >节
      </div>
    </Layout>   > < /布局
  );
}
