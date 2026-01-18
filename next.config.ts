import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Habilita exportação estática
  images: {
    domains: [],
    // Para exportação estática, precisamos desativar a otimização de imagens
    unoptimized: true,
  },
  // Desabilita o trailing slash nas URLs
  trailingSlash: false,
};

export default nextConfig;
