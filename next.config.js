/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的サイトとして書き出すための設定
  output: "export",

  // next/image を静的エクスポートで使用する場合の設定
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
