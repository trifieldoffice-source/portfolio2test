import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的サイトとして書き出すための設定（npm run build 実行時に out/ フォルダが生成されます）
  output: "export",

  // 補足：next/image を静的エクスポートで使用する場合、環境によっては以下の設定が必要になることがあります
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
