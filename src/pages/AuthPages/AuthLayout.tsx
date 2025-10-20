import ThemeTogglerIcon from "../../components/common/ThemeTogglerIcon";

// AuthLayout Component
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="flex min-h-screen">
        <div className="w-full flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-md">
            <div className=" bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-amber-100 dark:border-amber-900/30 overflow-hidden transition-colors duration-300">
              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-amber-700 via-amber-900 to-amber-700"></div>

              {/* Content */}
              <div className="p-8">
                {/* Logo */}
                <div className="flex justify-center mb-8 ">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center shadow-md">
                      <svg
                        className="w-7 h-7 text-amber-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                        PureMolasses
                      </div>
                      <div className="text-xs text-amber-700 dark:text-amber-300 -mt-1">
                        Traditional Filipino Quality
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ThemeTogglerIcon claseName="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-amber-900 dark:bg-amber-700 text-amber-50 hover:bg-amber-800 dark:hover:bg-amber-600 shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center" />
    </div>
  );
};

export default AuthLayout;
