let block = document.querySelector('#reels');
let spot = '';
const posts = [
  {
    username: "harsh_sharma",
    profileImage: "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?w=300",
    post: "./videos/golden.mp4",
    description: "Golden hour hits different 🌅✨ Just me, the sky, and endless calm.",
    isFollowed: false,
    isLiked: false,
    likes: 220,
    comments: 52,
    bookmarks: 30,
    shareCount: 18,
    isBookmarked: false
  },
  {
    username: "ananya.codes",
    profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300",
    post: "./videos/coder.mp4",
    description: "When the code finally works at 2 AM 💻✨ Debug. Sleep. Repeat.",
    isFollowed: true,
    isLiked: true,
    likes: 610,
    comments: 138,
    bookmarks: 92,
    shareCount: 55,
    isBookmarked: true
  },
  {
    username: "rahul.travels",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    post: "./videos/mountain.mp4",
    description: "Lost in the mountains, found my peace 🏔️🌲 Nature never disappoints.",
    isFollowed: false,
    isLiked: true,
    likes: 920,
    comments: 245,
    bookmarks: 180,
    shareCount: 130,
    isBookmarked: false
  },
  {
    username: "sneha.designs",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    post: "./videos/fashion.mp4",
    description: "Clean layouts. Soft colors. Design that speaks without words 🎨",
    isFollowed: true,
    isLiked: false,
    likes: 360,
    comments: 74,
    bookmarks: 58,
    shareCount: 34,
    isBookmarked: false
  },
  {
    username: "arjun.fitness",
    profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
    post: "./videos/gym.mp4",
    description: "No shortcuts. No excuses. Just discipline 💪🔥",
    isFollowed: false,
    isLiked: true,
    likes: 1380,
    comments: 410,
    bookmarks: 320,
    shareCount: 210,
    isBookmarked: true
  }
];


posts.forEach(function(elem){
    spot += `<div class="reel">
                <video autoplay loop muted src=${elem.post} ></video>
                <div id="btm">
                    <div id="user">
                        <img src=${elem.profileImage} alt="">
                        <h2>${elem.username}</h2>
                        <button>Follow</button>
                    </div>
                    <p id="desc">
                        ${elem.description}
                    </p>
                </div>
                <div id="right">
                    <div class="action">
                        <i class="ri-heart-3-line"></i>
                        <h3>${elem.likes}</h3>
                    </div>
                    <div class="action">
                        <i class="ri-chat-3-line"></i>
                        <h3>${elem.comments}</h3>
                    </div>
                    <div class="action">
                        <i class="ri-send-ins-line"></i>
                        <h3>${elem.shareCount}</h3>
                    </div>
                    <div class="action">
                        <i class="ri-bookmark-line"></i>
                        <h3>${elem.bookmarks}</h3>
                    </div>
                </div>
            </div>`
})

block.innerHTML = spot;
