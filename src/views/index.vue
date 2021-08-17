<template>
  <div class="box">
    <!-- 顶部背景 -->
    <div class="top_bj">
      <img src="../assets/imgs/logo@2x.png" alt="" @click="gotoUrl" />
    </div>
    <!-- 招生 -->
    <div class="nav">
      <div class="nav_cont">
        <div v-for="(item, index) in list" :key="index">
          <div class="nav_img">
            <img src="../assets/imgs/top_menu@2x.png" alt="" />
            <div class="nav_title">
              <span>{{ item.title }}</span>
            </div>
            <div class="nav_detail">
              <span>了解详情</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 事业人的圈子 -->
    <div class="cause_circle">
      <div class="cause_circle_title">
        <div>事业人的圈子，</div>
        <div>
          <img src="../assets/imgs/yin_left@2x.png" alt="" />
          <span>谈论的不仅财富与利润，</span>
          <img src="../assets/imgs/yin_right@2x.png" alt="" />
        </div>
        <div>更是机会与未来！</div>
      </div>
      <div class="cause_circle_bottom">迈向成功，从美国索菲亚MBA开始</div>
    </div>
    <!-- 资料表单 -->
    <div class="forms">
      <div>
        <div class="form_data">
          <div>
            <!-- <el-input v-model="formInline.name" placeholder="姓名"></el-input> -->
            <input type="text" placeholder="姓名" v-model="formInline.name" />
          </div>
          <div>
            <input v-model="formInline.phone" placeholder="手机号码" />
          </div>
        </div>
        <div class="form_data">
          <div>
            <select v-model="formInline.education" placeholder="学历/学位">
              <option value="" disabled selected>学历/学位</option>
              <option value="大专">大专</option>
              <option value="本科">本科</option>
              <option value="硕士">硕士</option>
              <option value="其他">其他</option>
            </select>
          </div>
          <div>
            <select v-model="formInline.year">
              <option value="" disabled selected>工作年限</option>
              <option value="1年">1年</option>
              <option value="2年">2年</option>
              <option value="3年">3年</option>
              <option value="5年">5年</option>
              <option value="5年以上">5年以上</option>
            </select>
          </div>
        </div>
        <div class="form_data">
          <div>
            <select v-model="formInline.industry" placeholder="从事行业">
              <option value="" disabled selected>从事行业</option>
              <option value="金融业">金融业</option>
              <option value="教育/培训">教育/培训</option>
              <option value="能源业">能源业</option>
              <option value="IT/互联网">IT/互联网</option>
              <option value="房地产业">房地产业</option>
              <option value="生活服务业">生活服务业</option>
              <option value="政府机构">政府机构</option>
              <option value="贸易业">贸易业</option>
              <option value="医疗/医药">医疗/医药</option>
              <option value="文化/传媒业">文化/传媒业</option>
              <option value="交通业">交通业</option>
              <option value="农林牧渔">农林牧渔</option>
              <option value="制造业">制造业</option>
              <option value="通信业">通信业</option>
              <option value="其他">其他</option>
            </select>
          </div>
          <div>
            <input v-model="formInline.job" placeholder="岗位职称" />
          </div>
        </div>
        <div class="receive">
          <div @click="commit">获取资料</div>
        </div>
      </div>
    </div>
    <!-- 哪些人适合读免联考MBA -->
    <div class="examination">
      <div class="cause_circle_title">哪些人适合读免联考MBA？</div>
      <div class="cause_circle_bottom">
        职场人士/公司高管/企业家，选择索菲亚 不再迷茫
      </div>
      <div class="card">
        <div
          v-for="(item, index) in situation_list"
          :key="index"
          class="card_box"
        >
          <el-card>
            <div class="card_cont">
              <div class="card_top"></div>
              <div>
                <img :src="item.url" alt="" class="card_img" />
              </div>
              <div class="card_title">{{ item.title }}</div>
              <div class="triangle">
                <div></div>
              </div>
              <div class="card_content">{{ item.content }}</div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="receive">
        <div>点击索取：招生详情</div>
      </div>
    </div>
    <!-- 选择美国名校MBA，学费仅需5.98万 -->
    <div class="choice">
      <div class="choice_title">
        <div>选择美国名校MBA</div>
        <div>学费仅需<span>5.98万</span></div>
      </div>
      <div class="jointly_given">
        <!-- 国内联考MBA    -->
        <div>
          <div class="domestic_top business">
            <div>国内联考MBA</div>
          </div>
          <div class="domestic_list">
            <div v-for="(item, index) in domestic_list" :key="index">
              <div class="list_item">{{ item }}</div>
            </div>
          </div>
        </div>
        <!-- VS -->
        <div>
          <div class="contrast_top">
            <div class="contrast_box">
              <div v-for="(item, index) in contrast_vs" :key="index">
                <div
                  class="contrast_vs_item"
                  :style="index == contrast_vs.length - 1 ? 'border:0' : ''"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 国际免联考MBA -->
        <div>
          <div class="international_top business">
            <div>国际免联考MBA</div>
          </div>
          <div class="international_list">
            <div v-for="(item, index) in international_list" :key="index">
              <div class="international_list_item list_item">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MBA 官方数据显示 -->
    <div class="data_show">
      <div class="receive">
        <div>还有疑问？点击咨询详情</div>
      </div>
      <div class="data_bj">
        <div class="data_title">
          <div>官方数据显示</div>
        </div>
        <div class="data_cont">
          <div>2019年全国联考人数再创新高</div>
          <div>
            <span>环比2018年增长</span>
            <span style="color: #c13232">21.8%</span>
          </div>
          <div>
            <span>而联考是申请国内MBA的最大门槛</span>
            <span style="color: #c13232">通过率</span>
            <span>不足三成！</span>
          </div>
        </div>
        <div class="data_cont_bj"></div>
      </div>
      <div class="degree_title">
        <div class="cause_circle_title">美国索菲亚大学推出美国MBA学位</div>
        <div class="cause_circle_bottom">免联考 全球通行 轻松拿原版MBA学位</div>
      </div>
    </div>
    <!-- 美国名校索菲亚大学 -->
    <div class="authority">
      <div class="borders" >
        <div class="authority_title" >
          <div class="authority_top">美国名校索菲亚大学</div>
          <div class="authority_bottom">地处硅谷 / 五大权威认证</div>
        </div>
      </div>

      <div class="authority_content">
        <div class="authority_cont">
          <p>
            美国索菲亚大学（Sofia
            University）是全球第一所超个人心理学顶尖学府，位于旧金山湾区集本科、硕士、博士于一体的高级学府。学校位于旧金山湾区硅谷中心的帕罗奥多，与著名高科技公司和斯坦福大学相邻。是中国教育部教育涉外监管信息网认证、WASC认证、BPPE认证、CHEA认证、美国学位三级认证，五大权威认证成员。斯坦福大学和加州大学伯克利分校(UCBerkeley)也是WASC认证的成员。
          </p>
          <p>
            其中索菲亚大学在加利福尼亚的两个校区都获得了WASC的认证，是一个被高度认可的大学。在超个人心理学、工商管理、计算机科学方面的创新专业课程享有全球声誉。
          </p>
        </div>
        <div class="authority_img">
          <img src="../assets/imgs/jieshao.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- 我们还拥有以下荣誉 -->
    <div class="honor">
      <div class="honor_cont">
        <div class="honor_title">我们还拥有以下荣誉</div>
        <div v-for="(item, index) in honor_list" :key="index">
          <div class="honor_item">{{ item }}</div>
        </div>
        <div style="">
          <img src="../assets/imgs/jieshao_heng@2x.png" alt="" />
        </div>
      </div>
      <div class="ranking_cont">
        <!-- 荣誉与排名 -->
        <div class="ranking">荣誉与排名</div>
        <div class="ranking_list">
          <div v-for="(item, index) in ranking_list" :key="index">
            <div class="ranking_img">
              <img :src="item.url" alt="" style="background-color: #fff" />
              <span>{{ index + 1 }}</span>
              <div>{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 美国 WASC 认证大学 -->
    <div class="university">
      <div>
        <div class="university_title">
          <span>美国</span>
          <span style="color: #c13232">WASC</span>
          <span>认证大学</span>
        </div>
        <div class="university_list">
          <div v-for="(item, index) in university_list" :key="index">
            <div
              class="university_item"
              :style="
                index == university_list.length - 1
                  ? 'display:flex;align-items:center;justify-content: center;'
                  : ''
              "
            >
              <img
                :src="item.url"
                alt=""
                :class="
                  index != university_list.length - 1 ? 'images1' : 'images2'
                "
              />
              <div>{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中国教育部涉外监管网可查 -->
    <div class="university">
      <div>
        <div class="university_title">
          <span>中国</span>
          <span style="color: #c13232">教育部涉外监管网</span>
          <span>可查</span>
        </div>
        <div class="jiaoyubu">
          <img
            src="../assets/imgs/jiaoyubu@2x.png"
            alt=""
            style="width: 100%"
          />
        </div>
      </div>
    </div>
    <!-- 美国SOFIA MBA申请条件 -->
    <div class="university">
      <div>
        <div class="university_title">
          <span>美国</span>
          <span style="color: #c13232">SOFIA</span>
          <span>MBA申请条件</span>
        </div>
        <div class="condition">
          <div
            v-for="(item, index) in apply_list"
            :key="index"
            class="apply_list_item"
          >
            <img :src="item.url" alt="" />
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 选择美国索菲亚大学MBA您将收获什么 -->
    <div class="harvests">
      <div>
        <div>
          <div class="harvest_title">
            <span style="color: #c13232">选择美国</span>
            <span>索菲亚</span>
            <span style="color: #c13232">大学MBA</span>
            <br />
            <span>您将</span>
            <span style="color: #c13232">收获</span>
            <span>什么</span>
          </div>
          <div class="harvest_tit">
            选择比努力更重要，美国索菲亚为您保驾护航
          </div>
          <div>
            <div v-for="(item, index) in harvest_list" :key="index">
              <div class="harvest_list_item">
                <img src="../assets/imgs/youshi_xuan@2x.png" alt="" />
                <div class="harvest_list_cont">
                  <div class="harvest_list_name">{{ item.name }}</div>
                  <div class="harvest_list_content">{{ item.content }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="receive">
            <div>点击索取：项目优势</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 国内业界知名导师+美国索菲亚/斯坦福教授 -->
    <div class="tutor">
      <div>
        <div>
          <div class="tutor_title" style="color: #c13232">
            国内业界知名导师<br />+美国索菲亚/斯坦福教授
          </div>
          <div class="tutor_tit">中美院校师资双重教学体验</div>
          <div class="swiper-container schools">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in supervisor_list"
                :key="index"
              >
                <div
                  style="
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <div
                    style="
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                    "
                  >
                    <div class="tutor_content">
                      <div class="tutor_content_img">
                        <img :src="item.url1" alt="" />
                      </div>
                      <div class="tutor_content_name">{{ item.name1 }}</div>
                      <div
                        v-for="(itema, indexa) in item.content1"
                        :key="indexa"
                      >
                        <div class="itema">
                          <img src="../assets/imgs/spot.png" alt="" />
                          <div>{{ itema }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="tutor_content">
                      <div class="tutor_content_img">
                        <img :src="item.url2" alt="" />
                      </div>
                      <div class="tutor_content_name">{{ item.name2 }}</div>
                      <div
                        v-for="(itemb, indexb) in item.content2"
                        :key="indexb"
                      >
                        <div class="itema">
                          <img src="../assets/imgs/spot.png" alt="" />
                          <div>{{ itemb }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="pagination"></div>
            <!-- <div class="swiper-button-prev swiper-btn"></div>
            <div class="swiper-button-next swiper-btn"></div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 美国索菲亚大学MBA学位课程体系 -->
    <div class="hierarchy">
      <div>
        <div>
          <div class="tutor_title" style="color: #c13232">
            美国索菲亚大学MBA<br />学位课程体系
          </div>
          <div class="tutor_tit">线上课程+线下实践，工作学习两不误</div>
        </div>
        <div class="hierarchy_table">
          <div class="table_head" style="border: 1px solid #c13232">
            MBAO in Leadership and Organizational Effectiveness 1.5 year
          </div>
          <div style="width: 100%">
            <table>
              <thead>
                <th>Course Number</th>
                <th>COURSE_TITLE 课程名称</th>
                <th>Qtr. #学期</th>
                <th>Units学分</th>
              </thead>
              <tr v-for="(item, index) in hierarchy_list" :key="index">
                <td>{{ item.course_num }}</td>
                <td>{{ item.course_name }}</td>
                <td :class="index == hierarchy_list.length - 1 ? 'totals' : ''">
                  {{ item.course_semester }}
                </td>
                <td :class="index == hierarchy_list.length - 1 ? 'totals' : ''">
                  {{ item.course_credit }}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="receive">
          <div>点击索取：课程详情</div>
        </div>
      </div>
    </div>
    <!-- 全球认可学位证书 -->
    <div class="tutor">
      <div>
        <div>
          <div class="tutor_title" style="color: #c13232">全球认可学位证书</div>
          <div class="certificate_img">
            <img src="../assets/imgs/xuewei@2x.png" alt="" />
          </div>
          <div class="tutor_title" style="color: #c13232">
            美国索菲亚MBA报考流程
          </div>
          <div class="procedure_list">
            <div
              v-for="(item, index) in procedure_list"
              :key="index"
              class="procedure_item"
            >
              <div class="procedure_list_item">
                <div>
                  <img :src="item.url" alt="" class="procedure_item_img1" />
                </div>
                <div>
                  <img
                    src="../assets/imgs/liucheng_jiantou@2x.png"
                    alt=""
                    class="procedure_item_img2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="box_bottom">
      <div>
        <div>
          <img
            src="../assets/imgs/footer_tel@2x.png"
            alt=""
            class="box_bottom_img1"
          />
        </div>
        <div class="box_bottom_border"></div>
        <div>
          <div class="hotline">咨询热线</div>
          <div class="telephone">400-111-2828</div>
        </div>
        <div class="qrcode">
          <img src="../assets/imgs/2weima@2x.png" alt="" />
          <div>服务号扫一扫</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/dist/js/swiper.js";
import $ from "jquery";
import applyApi from "@/api/apply.js";
export default {
  data() {
    return {
      //导航列表
      list: [
        { title: "招生人群" },
        { title: "报考条件" },
        { title: "核心优势" },
        { title: "授课形式" },
        { title: "授课师资" },
      ],
      //电话规则
      phoneRule:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
      //表单信息
      formInline: {
        name: "", //申请人姓名
        phone: "", //申请人手机号
        education: "", //申请人学历
        year: "", //工作年限
        industry: "", //从事行业
        job: "", //岗位职称
      },
      //免联考MBA
      situation_list: [
        {
          title: "时间不允许",
          content: "忙于工作、顾于生活、没精力备战联考",
          url: require("../assets/imgs/zhaosheng_1.png"),
        },
        {
          title: "工作遇瓶颈",
          content: "职业发展有障碍、晋升核心管理层没希望",
          url: require("../assets/imgs/zhaosheng_2.png"),
        },
        {
          title: "管理有困难",
          content: "忙于工作、顾于生活、没精力备战联考",
          url: require("../assets/imgs/zhaosheng_3.png"),
        },
        {
          title: "缺乏人脉网",
          content: "圈子太窄、业务拓展资源整合没渠道",
          url: require("../assets/imgs/zhaosheng_4.png"),
        },
        {
          title: "追求高学位",
          content: "大平台需要高学位、知识视野都受限",
          url: require("../assets/imgs/zhaosheng_5.png"),
        },
        {
          title: "技术转管理",
          content: "公司部门架构调整、个人进阶转型需要",
          url: require("../assets/imgs/zhaosheng_6.png"),
        },
      ],
      flag: -1, //招生详情悬浮效果
      //国内联考
      domestic_list: [
        "国家1月研究生联考",
        "专科毕业5年，本科毕业3年",
        "周末上课，一月至少4天",
        "英语、政治、逻辑与写作等科目",
        "工作经历较少人群为主",
      ],
      //国际联考
      international_list: [
        "美国索菲亚大学免试入学",
        "本科及以上学历，工作经验不限",
        "线上授课，工作学习两不误",
        "免参加全国联考",
        "核心管理层学员占比高",
      ],
      //vs
      contrast_vs: ["入学考试", "报考条件", "上课时间", "考试科目", "人脉资源"],
      //荣誉列表
      honor_list: [
        "加州硅谷TOP 4 MBA 工商管理专业",
        "在线心理学硕士、博士项目被评为全美性价比最高的学位项目",
        "连续多年被评为美国最佳心理学博士学位",
      ],
      //荣誉与排名
      ranking_list: [
        {
          name: "2021年全美第一的线上心理学博士项目",
          url: require("../assets/imgs/paiming1.png"),
        },
        {
          name: "性价比最高的线上心理学博士项目",
          url: require("../assets/imgs/paiming2.png"),
        },
        {
          name: "性价比最高的线上计算机科学硕士项目",
          url: require("../assets/imgs/paiming3.png"),
        },
        {
          name: "硅谷排名第4的线上MBA课程",
          url: require("../assets/imgs/paiming4.png"),
        },
      ],
      //美国 WASC 认证大学
      university_list: [
        { url: require("../assets/imgs/WASC_1.png"), name: "斯坦福大学" },
        { url: require("../assets/imgs/WASC_2.png"), name: "索菲亚大学" },
        {
          url: require("../assets/imgs/WASC_3.png"),
          name: "加州大学伯克利分校",
        },
        { url: require("../assets/imgs/WASC_4.png"), name: "加州理工大学" },
        { url: require("../assets/imgs/WASC_5.png"), name: "华盛顿大学" },
        { url: require("../assets/imgs/WASC_6.png"), name: "美国空军军官学校" },
        {
          url: require("../assets/imgs/WASC_7.png"),
          name: "加州大学洛杉矶分校",
        },
        { url: require("../assets/imgs/WASC_more@2x.png"), name: "" },
      ],
      //申请条件列表
      apply_list: [
        { name: "免联考\n入学", url: require("../assets/imgs/shenqing1.png") },
        { name: "无英语\n要求", url: require("../assets/imgs/shenqing2.png") },
        {
          name: "本科及以上学历",
          url: require("../assets/imgs/shenqing3.png"),
        },
        {
          name: "有管理经验优先",
          url: require("../assets/imgs/shenqing4.png"),
        },
      ],
      //收获列表
      harvest_list: [
        { name: "中美认证", content: "中国涉外监管信息网、WES 认证 学制1年半" },
        {
          name: "硕士学位",
          content:
            "毕业即获得大学授予的MBA硕士学位证书，与在校生学位证书完全相同",
        },
        {
          name: "授课师资",
          content:
            "中美院校师资双重教学、知名业界导师、索菲亚 /斯坦福教授,开拓国际视野",
        },
        {
          name: "学习模式",
          content: "线上课程+线下实践，中英双语教学，工作学习两不误",
        },
        {
          name: "管理思维",
          content:
            "创新课程模式，领导力+心理学+管理学，管理理论与商业实战兼修，成为具有商业战略思维能力的高端人才",
        },
        {
          name: "人脉资源",
          content:
            "企业老板、公司核心管理层人士占比高，丰富的线下活动，打造自己的“关系网”",
        },
      ],
      swiper_flag: -1, //轮播图悬浮效果
      // 国内业界知名导师+美国索菲亚/斯坦福教授
      supervisor_list: [
        {
          url1: require("../assets/imgs/professor_1.jpg"),
          name1: "Robert Frager 博士",
          content1: ["哈佛大学社会心理学博士", "索菲亚大学创始人及荣誉校长"],
          url2: require("../assets/imgs/professor_2.jpg"),
          name2: "Allan Cahoon 博士",
          content2: ["索菲亚大学代理校长", "美洲高等教育协会会长"],
        },
        {
          url1: require("../assets/imgs/professor_3.jpg"),
          name1: "steven gold 博士",
          content1: ["索菲亚大学副教务长", "MBA项目负责人"],
          url2: require("../assets/imgs/professor_4.jpg"),
          name2: "Bill Liu",
          content2: [
            "西北大学凯洛格商学院 客座教授",
            "NAVIASIA ADVISORS公司合伙人",
          ],
        },
        {
          url1: require("../assets/imgs/professor_5.jpg"),
          name1: "Dr. Marilyn Schlitz 博士",
          content1: [
            "斯坦福大学博士后",
            "索菲亚大学超个人心理学博士学位项目负责人",
          ],
          url2: require("../assets/imgs/professor_6.jpg"),
          name2: "Juan Ling",
          content2: [
            "乔治亚学院与州立大学 管理学教授",
            "肯塔基大学 管理学讲师",
          ],
        },
        {
          url1: require("../assets/imgs/professor_7.jpg"),
          name1: "Hairong Gui",
          content1: ["Wahai Group 董事总经理", "加州大学洛杉矶分校 副教授"],
          url2: require("../assets/imgs/professor_8.jpg"),
          name2: "Ted Sun",
          content2: [
            "索菲亚大学 副教授",
            "Super Micro Computer, Inc 系统工程师",
          ],
        },
        {
          url1: require("../assets/imgs/professor_9.jpg"),
          name1: "Wei Song",
          content1: ["黑丘州立大学 教授", "汤普森河大学 助理教授"],
          url2: require("../assets/imgs/professor_10.jpg"),
          name2: "Weiqi Zhang",
          content2: ["萨福克大学 助理教授", "哈佛大学 助理研究员"],
        },
        {
          url1: require("../assets/imgs/professor_11.jpg"),
          name1: "Tom J. Tafolla博士",
          content1: ["法学博士", "索菲亚大学MBA课程核心教授"],
          url2: require("../assets/imgs/professor_12.jpg"),
          name2: "Dr. Vicki Lundin-Taylor博士",
          content2: [
            "索菲亚大学教授",
            "西北六个州的国际人生教练联合会高级分会会长",
          ],
        },
        {
          url1: require("../assets/imgs/professor_13.jpg"),
          name1: "Dr. Robert woods博士",
          content1: [
            "索菲亚超个人心理学项目负责人",
            "致力于研究生态心理学和精神改造",
          ],
          url2: require("../assets/imgs/professor_14.jpg"),
          name2: "Dr. Kelly Yi博士",
          content2: [
            "索菲亚大学临床心理学主任",
            "善于用启发式、叙述式等方式来进行心理治疗",
          ],
        },
        {
          url1: require("../assets/imgs/professor_15.jpg"),
          name1: "Dr. Tracy Tuten 博士",
          content1: ["索菲亚大学教授", "商业管理博士"],
          url2: require("../assets/imgs/professor_16.jpg"),
          name2: "Dr. Stephen K. Pollard博士",
          content2: ["索菲亚大学教授", "俄亥俄州立大学博士"],
        },
      ],
      //美国索菲亚大学MBA学位课程体系
      hierarchy_list: [
        {
          course_num: "MBAO4082",
          course_name: "Design, Branding, and Social Media 品牌设计与社交媒体",
          course_semester: "1",
          course_credit: "4",
        },
        {
          course_num: "MBAO1108",
          course_name: "Positive Psychology 商业积极心理学",
          course_semester: "1",
          course_credit: "4",
        },
        {
          course_num: "MBAO2080",
          course_name: "Marketing Management 营销管理",
          course_semester: "2",
          course_credit: "4",
        },
        {
          course_num: "MBAO4076",
          course_name: "International Business 国际商务",
          course_semester: "2",
          course_credit: "4",
        },
        {
          course_num: "MBAO1210",
          course_name: "Personality and Motivation 人格与动机",
          course_semester: "3",
          course_credit: "4",
        },
        {
          course_num: "MBAO1120",
          course_name: "Accounting 会计",
          course_semester: "3",
          course_credit: "4",
        },
        {
          course_num: "MBAO4073",
          course_name: "Strategic Management 战略管理",
          course_semester: "4",
          course_credit: "4",
        },
        {
          course_num: "MBAO3010",
          course_name: "Operations Management 运营管理",
          course_semester: "4",
          course_credit: "4",
        },
        {
          course_num: "MBAO4079",
          course_name: "Finance-Economics 金融经济学",
          course_semester: "5",
          course_credit: "4",
        },
        {
          course_num: "MBAO4073",
          course_name: "Leading High-performance Team 领导高性能团队",
          course_semester: "5",
          course_credit: "4",
        },
        {
          course_num: "MBAO3010",
          course_name:
            "Organizational Leadership & Management 组织领导力与管理",
          course_semester: "6",
          course_credit: "4",
        },
        {
          course_num: "MBAO4079",
          course_name: "Managing Human Capital 人力资源管理",
          course_semester: "6",
          course_credit: "4",
        },
        {
          course_num: "",
          course_name: "",
          course_semester: "total",
          course_credit: "48",
        },
      ],
      procedure_list: [
        { url: require("../assets/imgs/liucheng_1@2x.png") },
        { url: require("../assets/imgs/liucheng_2@2x.png") },
        { url: require("../assets/imgs/liucheng_3@2x.png") },
        { url: require("../assets/imgs/liucheng_4@2x.png") },
        { url: require("../assets/imgs/liucheng_5@2x.png") },
      ],
    };
  },

  mounted() {
    new Swiper(".schools", {
      autoplay: true,
      loop: true,
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      mousewheel: true,
      pagination: {
        el: ".pagination",
        clickable: true,
      },
    });
  },

  methods: {
    addClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex == this.hierarchy_list.length - 1) {
        return "addStyle";
      }
    },
    gotoUrl() {
      location.href = "https://mob.gdgjsxy.com/";
    },
    // 在线咨询
    contact() {
      window.location.href =
        "https://tb.53kf.com/code/client/25020e994ff16ff874174390aedd665f6/1";
    },
    //获取资料
    commit() {
      for (var key in this.formInline) {
        if (!this.formInline[key]) {
          this.$message({
            type: "warning",
            message: "请填写完整",
          });
          return;
        }
      }
      //手机号验证
      if (!this.phoneRule.test(this.formInline.phone)) {
        this.$message({
          message: "手机号错误，请重新填写",
          type: "warning",
        });
        return;
      }
      console.log(this.formInline);
      applyApi.programAdd(this.formInline).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          for (var key in this.formInline) {
            this.formInline[key] = "";
          }
          this.$message({
            type: "success",
            message: res.data.message,
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/reset.css";
// ::v-deep .el-input__inner {
//   border: 0;
//   font-size: 28px;
//   border-radius: 8px;
//   width: 320px;
//   background-color: #f0f0f0;
//   height: 70px;
// }
::v-deep .el-icon-arrow-up::before {
  font-size: 30px;
}
::v-deep .index_wrapper {
  -webkit-transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  -ms-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
}
.select-popper .el-select-dropdown__item {
  font-size: 24px;
}
.receive {
  font-size: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 80px 0;
  div {
    width: 50%;
    background-color: #c13232;
    color: #fff;
    padding: 15px 0;
    border-radius: 50px;
  }
}
.cause_circle_title {
  font-size: 40px;
  color: #c13232;
  font-weight: 700;
  line-height: 50px;
  span {
    margin-left: 20px;
  }
  img {
    width: 40px;
    height: 27px;
  }
}
.cause_circle_bottom {
  margin: 20px 0;
  color: #464646;
  font-size: 30px;
}
.top_bj {
  background-image: url("../assets/imgs/head_bg@2x.jpg");
  width: 100%;
  height: 872px;
  background-size: cover;
  img {
    width: 60%;
    margin: 40px 0 0 45px;
  }
}
.nav {
  display: flex;
  justify-content: center;
  .nav_cont {
    width: 96%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 4px 15px rgba(93, 93, 93, 0.1);
    border-radius: 20px;
    position: relative;
    top: -72px;
    padding: 10px 10px;
  }
}
.nav_img {
  margin: 12px 6px;
  position: relative;
  .nav_title {
    text-align: center;
    position: absolute;
    top: 20%;
    margin: 0 23%;
    font-size: 34px;
    font-weight: 700;
    color: #fff;
  }
  .nav_detail {
    position: absolute;
    bottom: 10%;
    color: #fff;
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    span {
      width:96%;
      background-color: #c13232;
      padding: 5% 0;
      border-radius: 16px;
    }
  }
}
.cause_circle {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.forms {
  width: 100%;
  display: flex;
  justify-content: center;
  > div {
    width: 100%;
  }
}
.form_data {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.examination {
  text-align: center;
  background-image: url("../assets/imgs/youshi_bg.jpg");
  background-size: cover;
  padding: 50px 0 10px 0;
  height: auto;
}
.card {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 20px;
  .card_box {
    width: 30%;
    height: auto;
    margin: 10px 0;
  }
}
.card_cont {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    width: 100%;
  }
  .card_top {
    width: 50%;
    height: 6px;
    border-radius: 6px;
    background-color: #f0f0f0;
  }
  .card_img {
    margin: 30px 0;
    width: 58px;
    height: 53px;
  }
  .card_title {
    font-size: 32px;
    color: #c13232;
    font-weight: 700;
  }
  .triangle {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    > div {
      width: 0;
      height: 0;
      border-right: 16px solid transparent;
      border-left: 16px solid transparent;
      border-bottom: 16px solid #f4f4f4;
    }
  }
  .card_content {
    background-color: #f4f4f4;
    padding: 15px 15px 30px 15px;
    font-size: 30px;
    color: #5d5d5d;
    line-height: 42px;
    border-radius: 10px;
  }
}
.choice {
  padding: 50px 0;
  text-align: center;
  .choice_title {
    font-size: 40px;
    color: #c13232;
    font-weight: 700;
    line-height: 50px;
    span {
      color: #464646;
    }
  }
}
.jointly_given {
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
}
.business {
  background-size: contain;
  margin-top: 67px;
  background-repeat: no-repeat;
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  height: 74px;
}
.domestic_top {
  background-image: url("../assets/imgs/VS_left@2x.png");
  background-position: right;
  text-align: right;
  div {
    position: relative;
    bottom: -12px;
    right: 20px;
  }
}
.domestic_list {
  margin: 70px 0 0 10px;
  text-align: right;
  color: #9b7a70;
}
.contrast_top {
  background-image: url("../assets/imgs/VS_center@2x.png");
  width: 183px;
  height: 620px;
  background-size: cover;
  background-repeat: no-repeat;
}
.contrast_box {
  padding: 200px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #094275;
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .contrast_vs_item {
    width: 66%;
    line-height: 50px;
    border-bottom: 5px solid #9b7a70;
    font-size: 28px;
    font-weight: 700;
    padding: 12px 0;
  }
}

.international_top {
  background-image: url("../assets/imgs/VS_right@2x.png");
  background-position: left;
  text-align: left;
  div {
    position: relative;
    bottom: -12px;
    left: 20px;
  }
}
.international_list {
  margin: 70px 10px 0 0;
  .international_list_item {
    text-align: left;
    color: #c13232;
  }
}
.list_item {
  line-height: 36px;
  border-bottom: 2px dashed #c0a59c !important;
  font-size: 26px;
  padding: 10px 0;
}
.data_show {
  text-align: center;
  background-image: url("../assets/imgs/guangfang_bg@2x.png");
  background-size: contain;
  height: 900px;
}
.data_bj {
  background-color: rgba(199, 199, 199, 0.1);
  height: 500px;
  position: relative;
  .data_title {
    background-image: url("../assets/imgs/guangfang@2x.png");
    height: 58px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    font-weight: 700;
    font-size: 36px;
    div {
      position: relative;
      top: 10px;
    }
  }
  .data_cont {
    font-size: 28px;
    font-weight: 600;
    color: #464646;
    line-height: 60px;
    margin: 80px 0;
  }
  .data_cont_bj {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-image: url("../assets/imgs/guanfang_MBA@2x.png");
    height: 237px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}
.degree_title {
  margin: 80px 0;
}
.authority {
  background-color: #094275;
  width: 100%;
}
.borders {
  padding: 50px 50px 0 50px;
}
.authority_title {
  border: 2px dashed #ffbc00;
  border-left: none;
  height: 80px;
  .authority_top {
    position: absolute;
    transform: translateY(-50%);
    display: inline-block;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    background-color: #094275;
  }
  .authority_bottom {
    position: absolute;
    transform: translateY(70%);
    display: inline-block;
    color: #ffbc00;
    font-size: 48px;
    font-weight: 600;
    background-color: #094275;
  }
}
.authority_content {
  padding-bottom: 50px;
  margin: 0 50px;
  color: #fff;
  .authority_cont {
    margin: 40px 0;
  }
  p {
    font-size: 26px;
    line-height: 50px;
    text-indent: 50px;
  }
  .authority_img {
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
  }
}
.honor {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f8f8f8;
  .honor_cont {
    position: relative;
    top: -110px;
    width: 90%;
    background-color: #fff;
    .honor_title {
      text-align: center;
      margin: 50px 0;
      color: #094275;
      font-weight: 700;
      font-size: 36px;
    }
    .honor_item {
      margin: 0 50px;
      display: list-item;
      line-height: 50px;
      font-size: 28px;
    }
    img {
      width: 100%;
      margin-top: 50px;
      background-color: #ffbc00;
    }
  }
}
.honor_item::marker {
  color: #094275;
  border-radius: 100%;
}
.ranking_cont {
  width: 90%;
  margin-bottom: 30px;
}
.ranking {
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  color: #c13232;
  background-color: #f8f8f8;
  padding-bottom: 50px;
}
.ranking_list {
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .ranking_img {
    background-image: url("../assets/imgs/paiming_bg.png");
    // background-color: #fff;
    // border:1px solid #eee;
    // border-radius:10px;
    width: 332px;
    height: 240px;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 10px 0;
    position: relative;
    text-align: center;
    span {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 28px;
      font-weight: 600;
      color: #fff;
    }
    img {
      width: 45%;
      height: 44%;
      margin: 25px 0 12px 0;
    }
    > div {
      margin: 0 20px;
      font-size: 28px;
      line-height: 45px;
    }
  }
}
.university {
  display: flex;
  justify-content: center;
  > div {
    width: 90%;
    text-align: center;
  }
  .university_title {
    font-size: 36px;
    font-weight: 700;
    padding: 50px 0;
  }
}
.university_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  .university_item {
    width: 320px;
    height: 260px;
    border-radius: 10px;
    border: 2px solid #f0f0f0;
    margin: 10px 0;
    text-align: center;
    font-size: 28px;
    img {
      margin: 20px 0;
    }
  }
}
.images1 {
  width: 156px;
  height: 156px;
}
.images2 {
  width: 70px;
  height: 14px;
}
.jiaoyubu {
  margin-bottom: 30px;
}
.condition {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .apply_list_item {
    width: 24%;
    border: 2px solid #f0f0f0;
    padding: 20px;
    margin: 0 10px;
    border-radius: 10px;
    font-size: 26px;
    line-height: 36px;
    img {
      width: 50%;
    }
    > div {
      margin-top: 10px;
    }
  }
}
.harvests {
  background-image: url("../assets/imgs/youshi_bg.jpg");
  background-size: cover;
  width: 100%;
  height: 1400px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  > div {
    width: 90%;
  }
}
.harvest_title {
  font-size: 40px;
  font-weight: 700;
  margin: 50px 0 20px 0;
  text-align: center;
}
.harvest_tit {
  font-size: 30px;
  color: #464646;
  margin-bottom: 80px;
  text-align: center;
}
.harvest_list_item {
  display: flex;
  align-items: flex-start;
  margin-top: 12px;
  font-size: 26px;
  // line-height: 60px;
  img {
    width: 38px;
    height: 34px;
    margin-right: 10px;
  }
}
.harvest_list_cont {
  width: 100%;
  .harvest_list_name {
    color: #c13232;
    font-weight: 700;
    font-size: 34px;
  }
  .harvest_list_content {
    width: 100%;
    padding: 10px 0;
    border-bottom: 2px solid #ddd;
    margin-bottom: 10px;
    line-height: 40px;
  }
}
.tutor {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  > div {
    width: 100%;
  }
}
.tutor_title {
  font-size: 40px;
  font-weight: 700;
  margin: 50px 0 20px 0;
  text-align: center;
}
.tutor_tit {
  font-size: 28px;
  color: #464646;
  margin-bottom: 50px;
  text-align: center;
}
.hierarchy {
  background-image: url("../assets/imgs/kecheng_bg.jpg");
  background-size: cover;
  width: 100%;
  height: 1750px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  > div {
    width: 90%;
  }
}

.table_head {
  text-align: center;
  background-color: #c13232;
  padding: 20px 0;
  color: #fff;
  font-size: 28px;
  font-weight: 500;
}
.totals {
  color: #c13232;
  font-size: 28px;
  font-weight: 600;
}
.certificate_img {
  margin: 50px 0;
}
.procedure_list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  .procedure_item {
    display: flex;
    align-items: center;
    width: 30vw;
    .procedure_list_item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}
.procedure_item_img1 {
  width: 137px;
  height: 158px;
}
.procedure_item_img2 {
  margin: 0 20px;
  width: 31px;
  height: 61px;
}
.box_bottom {
  position: relative;
  background-image: url("../assets/imgs/footer_bg@2x.png");
  width: 100%;
  height: 300px;
  background-size: cover;
  display: flex;
  justify-content: center;
  > div {
    width: 90%;
    display: flex;
    align-items: center;
  }
}
.box_bottom_img1 {
  width: 68px;
  height: 68px;
}
.box_bottom_border {
  width: 2px;
  height: 72px;
  background-color: #f5f5f5;
  margin: 0 20px;
  transform: rotate(20deg);
  -ms-transform: rotate(20deg); /* Internet Explorer */
  -moz-transform: rotate(20deg); /* Firefox */
  -webkit-transform: rotate(20deg); /* Safari 和 Chrome */
  -o-transform: rotate(20deg); /* Opera */
}
.hotline {
  color: #fff;
  font-size: 32px;
}
.telephone {
  font-size: 42px;
  color: #fff;
  font-weight: 700;
}
.qrcode {
  position: absolute;
  right: 44px;
  top: 62px;
  width: 150px;
  height: 150px;
  color: #fff;
  text-align: center;
  > div {
    margin-top: 10px;
  }
}
//院校介绍
.schools {
  width: 100%;
  background: #fff;
}
::v-deep .swiper-pagination-bullet-active {
  width: 30px !important;
  border-radius: 10px;
  background-color: #c13232;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  ::v-deep .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    margin: 0 10px;
    border-radius: 10px;
    z-index: 99999999999;
    background-color: #c13232;
  }
}
.tutor_content {
  background-image: url("../assets/imgs/professor_bg@2x.png");
  // width: 304px;
  // height: 460px;
  width: 336px;
  height: 507px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 10px;
  .tutor_content_name {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    color: #c13232;
    margin: 18px 4px;
    height: 58px;
  }
}
.tutor_content_img {
  text-align: center;
  img {
    width: 163px;
    height: 185px;
    margin-top: 36px;
  }
}
.itema {
  display: flex;
  margin: 0 10px;
  line-height: 36px;
  img {
    width: 20px;
    height: 20px;
    margin-top: 8px;
  }
}
</style>
