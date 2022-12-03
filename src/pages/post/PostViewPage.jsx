import React from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";

import PostPage from "../../components/post/PostPage";
import { motion } from "framer-motion";

export default function PostViewPage() {
  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Layout>
        <PostPage />
      </Layout>
    </motion.div>
  );
}
