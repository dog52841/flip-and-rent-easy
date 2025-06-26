
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Plus, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { href: "/browse", label: "Browse" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleListItem = () => {
    if (user) {
      navigate("/list-item");
    } else {
      navigate("/auth");
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Rentify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <Button 
                  onClick={handleListItem}
                  className="bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-200"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">List Item</span>
                  <span className="sm:hidden">List</span>
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="border-gray-300 hover:border-blue-600 hover:text-blue-600">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white border border-gray-200 shadow-lg">
                    <DropdownMenuItem 
                      onClick={() => navigate("/dashboard")}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={handleSignOut}
                      className="cursor-pointer hover:bg-gray-50 text-red-600"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button 
                    variant="outline" 
                    className="hidden sm:flex border-gray-300 hover:border-blue-600 hover:text-blue-600"
                  >
                    Sign In
                  </Button>
                </Link>
                <Button 
                  onClick={handleListItem}
                  className="bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-200"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">List Item</span>
                  <span className="sm:hidden">List</span>
                </Button>
              </>
            )}

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Rentify</span>
                  </div>
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    {user ? (
                      <>
                        <Button 
                          onClick={handleListItem}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          List Item
                        </Button>
                        <Button 
                          onClick={handleSignOut}
                          variant="outline" 
                          className="w-full border-red-300 text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                      </>
                    ) : (
                      <Link to="/auth" className="block">
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
