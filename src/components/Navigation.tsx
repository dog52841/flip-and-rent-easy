
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
    await signOut();
    navigate("/");
  };

  const handleListItem = () => {
    if (user) {
      navigate("/list-item");
    } else {
      navigate("/auth");
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Rentify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
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
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">List Item</span>
                  <span className="sm:hidden">List</span>
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" className="hidden sm:flex">
                    Sign In
                  </Button>
                </Link>
                <Button 
                  onClick={handleListItem}
                  className="bg-black text-white hover:bg-gray-800"
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
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="text-gray-600 hover:text-gray-900 font-medium py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                  {user ? (
                    <>
                      <Button 
                        onClick={handleListItem}
                        className="w-full mt-4"
                      >
                        List Item
                      </Button>
                      <Button 
                        onClick={handleSignOut}
                        variant="outline" 
                        className="w-full"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Link to="/auth">
                      <Button variant="outline" className="w-full mt-4">
                        Sign In
                      </Button>
                    </Link>
                  )}
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
