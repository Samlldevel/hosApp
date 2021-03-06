const gradeInfo = ['大一', '大二', '大三', '大四', '其他']
const departmentInfo = {
  
  "地球科学学院": [
    "资源勘查工程",
    "勘查技术与工程",
    "地球化学",
    "地质工程",
    "宝石及材料工艺学",
    "自然地理与资源环境",
    "产品设计（珠宝首饰"
  ],
  "环境科学与工程学院": [
    "环境工程",
    "给排水科学与工程",
    "水文与水资源工程",
    "地下水科学与工程"
  ],
  "土木与建筑工程学院": [
    "土木工程",
    "建筑学",
    "城市规划",
    "工程管理",
    "建筑电气与智能化 "
  ],
  "测绘地理信息学院": ["测绘工程", "地理信息科学", "遥感科学与技术"],
  "材料科学与工程学院": [
    "高分子材料与工程",
    "无机非金属材料工程",
    "材料化学",
    "金属材料工程",
    "冶金工程",
    "材料科学与工程"
  ],
  "化学与生物工程学院": [
    "化学工程与工艺",
    "应用化学",
    "生物工程",
    "食品科学与工程",
    "能源化学工程 "
  ],
  "信息科学与工程学院": [
    "计算机科学与技术",
    "电子信息工程",
    "通信工程",
    "网络工程",
    "物联网工程",
    "软件工程",
    "数据科学与大数据技术",
    "人工智能"
  ],
  "机械与控制工程学院": ["自动化", "机械设计制造及其自动化", "机械电子工程"],
  "珠宝学院": ["宝石及材料工艺学 ", "产品设计(珠宝首饰)"],
  "商学院": [
    "国际经济与贸易",
    "市场营销",
    "工商管理",
    "人力资源管理",
    "会计学",
    "电子商务",
    "物流管理",
    "房地产经营管理",
    "财务管理"
  ],
  "旅游与风景园林学院": ["旅游管理", "风景园林", "酒店管理", "会展经理与管理"],
  "外国语学院": ["英语", "日语"],
  "理学院": ["应用统计学", "应用物理学", "信息与计算科学"],
  "公共管理与传媒学院": [
    "行政管理",
    "广告学",
    "社会工作",
    "国民经济管理",
    "传播学"
  ],
  "艺术学院": [
    "环境设计",
    "视觉传达设计",
    "产品设计",
    "服装与服饰设计",
    "动画",
    "工艺美术",
    "数字媒体艺术"
  ]
}

const officeInfo = ['内科', '外科', '五官科', '牙科', '其他']
// const categoryInfo = ['感冒', '肚子不舒服', '头晕', '发烧', '其他']
const categoryInfo = ['受伤', '感冒发烧', '胃痛', '喉咙痛', '肚子疼', '头晕', '牙疼', '皮肤病', '其他']
module.exports = {
  gradeInfo,
  departmentInfo,
  officeInfo,
  categoryInfo
}