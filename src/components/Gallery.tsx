import React from 'react';

// These are placeholder images from Pexels
const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    caption: "13.5畳の広い共有スペース（女子寮）",
    alt: "女子寮の広い共有スペース"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    caption: "10畳+ウォーキングクローゼットの個室（女子寮）",
    alt: "女子寮の個室"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg",
    caption: "最新式のお風呂（男子寮）",
    alt: "男子寮のお風呂"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg",
    caption: "男子寮よりさらに広いお風呂（女子寮）",
    alt: "女子寮のお風呂"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    caption: "リフォームされた個室（男子寮）",
    alt: "男子寮のリフォームされた個室"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
    caption: "食洗機付きキッチン（女子寮）",
    alt: "女子寮のキッチン"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg",
    caption: "全12室の個室のうち唯一の和室の畳表は新しくしました（女子寮）",
    alt: "女子寮の和室"
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-red-900 mb-10">内観画像</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};