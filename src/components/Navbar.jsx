import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }} // Start hidden above
          animate={{ y: 0, opacity: 1 }} // Slide down into place
          exit={{ y: -80, opacity: 0 }} // Slide back up when removed
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md h-16 flex items-center px-8 z-50"
        >
          <h3 className="text-2xl font-bold text-white pl-40">Likhil Kosuru</h3>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
