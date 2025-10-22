import ThemeTogglerIcon from "../../components/common/ThemeTogglerIcon";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100
     to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
     transition-colors duration-300"
    >
      <div className="flex min-h-screen">
        <div className="w-full flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-md">
            <div
              className=" bg-white dark:bg-gray-900 rounded-2xl shadow-2xl 
            border-2 border-amber-100 dark:border-amber-900/30 overflow-hidden 
            transition-colors duration-300"
            >
              {/* Decorative Top Border */}
              <div
                className="h-1 bg-gradient-to-r from-amber-700 
              via-amber-900 to-amber-700"
              ></div>

              {/* Content */}
              <div className="p-8">
                {/* Logo */}
                <div className="flex justify-center mb-3 ">
                  <div className="flex items-center gap-2">
                    <img className="w-12 h-12 " src="./images/logo/logo.svg" />

                    <div>
                      <div
                        className="text-2xl font-bold text-amber-900 
                      dark:text-amber-100"
                      >
                        PureMolasses
                      </div>
                      <div className="text-xs text-amber-700 dark:text-amber-300 -mt-1">
                        Traditional Filipino Quality
                      </div>
                    </div>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeTogglerIcon />
    </div>
  );
};

export const Divider = () => {
  return (
    <div className="mb-6 flex items-center">
      <div className="h-px flex-1 bg-amber-200 dark:bg-amber-800"></div>
      <span
        className="px-4 text-sm text-amber-700 dark:text-amber-300 
          font-medium"
      >
        Or continue with email
      </span>
      <div className="h-px flex-1 bg-amber-200 dark:bg-amber-800"></div>
    </div>
  );
};

export const Header = ({ HeaderText }: { HeaderText: string }) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100">
        {HeaderText}
      </h2>
    </div>
  );
};

export default AuthLayout;
