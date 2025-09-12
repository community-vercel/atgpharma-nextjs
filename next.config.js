module.exports = {
  env: {
    GA_TRACKING_ID: "GTM-NWVWDSD",
    GA_AD_ID: "AW-705757538",
    NEXT_PUBLIC_STRAPI_API_URL: "https://os-strapi.herokuapp.com",
    SENDGRID_API_KEY: "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",
    DEMO_BOOKING_SG_TEMPLATE: "d-01c6bebc75074f86adc27b9c1fd3c88a",
    DEMO_BOOKING_SG_FROM_EMAIL: "no-reply@em5111.request.atgpharma.com",
    DEMO_BOOKING_SG_TO_EMAIL: "marketing@atgpharma.com"
  },
  async redirects() {
    return [
      {
        source: "/packaging",
        destination: "/products/packaging/capper",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/aboutus",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/solutions/build",
        destination: "/build",
        permanent: true,
      },
      {
        source: "/solutions/300",
        destination: "/products/automatic/cartridge-filling-machine",
        permanent: true,
      },
      {
        source: "/products/automatic",
        destination: "/products/automatic/cartridge-filling-machine",
        permanent: true,
      },
      {
        source: "/products/packaging",
        destination: "/products/packaging/capper",
        permanent: true,
      },
      {
        source: "/products/semi",
        destination: "/products/semi-automatic/cartridges",
        permanent: true,
      },
      {
        source: "/solutions/manual/spec",
        destination: "/products/semi-automatic/cartridges",
        permanent: true,
      },
      {
        source: "/products/automatic/cartridges",
        destination: "/products/automatic/cartridge-filling-machine",
        permanent: true,
      },
      {
        source: "/products/automatic/gummies",
        destination: "/products/automatic/gummy-filling-machine",
        permanent: true,
      },
      {
        source: "/products/automatic/bottles",
        destination: "/products/automatic/bottle-filling-machine",
        permanent: true,
      },
      {
        source: "/products/automatic/balms",
        destination: "/products/automatic/balm-filling-machine",
        permanent: true,
      },
      {
        source: "/roicalculator",
        destination: "/roi",
        permanent: true,
      },
      {
        source: "/solutions/manual",
        destination: "/products/semi-automatic/cartridges",
        permanent: true,
      },
    ];
  },
};
