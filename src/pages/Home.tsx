/**
 * 個人主頁 - 個人網站主頁面
 * 包含個人介紹、學習資料展示和聯繫方式
 */
import React from 'react';
import { Mail, Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';

/**
 * 學習資料數據接口
 */
interface LearningMaterial {
  name: string;
  category: string;
  description?: string;
}

/**
 * 個人主頁組件
 */
export default function Home() {
  /**
   * 學習資料數據
   */
  const learningMaterials: LearningMaterial[] = [
    { name: '微積分', category: '系上課程' },
    { name: 'HTML前端設計', category: '系上課程' },
    { name: 'Java', category: '自學' },
    { name: 'JavaScript 網頁開發', category: '自學' },
    { name: 'C++', category: '自學' },
    { name: 'C 語言', category: '自學' },
    { name: '資料結構與演算法', category: '電腦科學' },
  ];

  /**
   * 按學習類別分組
   */
  const learningCategories = learningMaterials.reduce((acc, material) => {
    if (!acc[material.category]) {
      acc[material.category] = [];
    }
    acc[material.category].push(material);
    return acc;
  }, {} as Record<string, LearningMaterial[]>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* 導航欄 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-800">个人网站</div>
            <div className="flex space-x-6">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">关于我</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">學習資料</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">联系</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄網域 */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 mx-auto md:mx-0 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://pub-cdn.sider.ai/u/U0KAH9ALR0J/web-coder/68f8e48a356abff3f8ffddf4/resource/025bd1ea-0d01-4d7f-b017-7eb480c27bb9.png" 
                  alt="個人頭像"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                你好，我是 <span className="text-blue-600">黃兆宏</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                國立臺東大學應用數學系大一生
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                數學愛好者，喜歡研究數學 & <p className="text-slate-500 mb-8 leading-relaxed">
                也常自學Python、Java、JavaScript(簡寫JS)、C++、C語言
              </p>
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>屏東, 臺灣</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>持續學習中</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  查看學習資料
                </Button>
                <Button variant="outline" className="bg-transparent border-slate-300">
                  學習筆記
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">快速信息</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500">學習領域</p>
                    <p className="text-slate-800">數學、程式設計、電腦科學</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">當前狀態</p>
                    <p className="text-slate-800">在學學生，持續學習</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">學習目標</p>
                    <p className="text-slate-800">精進數學與程式能力</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 關於我 */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">关于我</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://pub-cdn.sider.ai/u/U0KAH9ALR0J/web-coder/68f8e48a356abff3f8ffddf4/resource/47415ca5-e925-4975-86d1-f4f032e1b8bb.jpg" 
                alt="學習場景"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                我是國立臺東大學應用數學系的一年級學生，對數學和程式設計充滿熱情。從高中時期開始接觸程式設計，自學多種程式語言。
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                喜歡探索數學的奧秘，同時也享受用程式解決實際問題的過程。相信數學思維與程式能力的結合能夠創造出更好的解決方案。
              </p>
              <p className="text-slate-600 leading-relaxed">
                在課餘時間，我持續學習新的技術和數學知識，並嘗試將所學應用於實際項目中。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 學習資料 */}
      <section id="skills" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">學習資料</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(learningCategories).map(([category, categoryMaterials]) => (
              <div key={category} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{category}</h3>
                <div className="space-y-3">
                  {categoryMaterials.map((material) => (
                    <div key={material.name} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-slate-700 font-medium">{material.name}</p>
                        {material.description && (
                          <p className="text-sm text-slate-500 mt-1">{material.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 聯繫方式 */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">聯繫我</h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">獲取聯繫</h3>
                <p className="text-slate-600 mb-8">
                  如果您對我的學習經歷有興趣，或者想要交流數學與程式設計，請隨時聯繫我。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-700">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span>example@email.com</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Github className="w-5 h-5 mr-3 text-slate-800" />
                    <span>github.com/username</span>
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Linkedin className="w-5 h-5 mr-3 text-blue-600" />
                    <span>linkedin.com/in/username</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="請輸入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">邮箱</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="請輸入您的郵箱"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">消息</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="請輸入您的消息"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    發送消息
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 尾巴 */}
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p>&copy; 2025保留所有權利.</p>
        </div>
      </footer>
    </div>
  );
}
