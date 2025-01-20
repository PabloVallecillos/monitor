import DashboardNav from '@/components/shared/dashboard-nav';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { navItems } from '@/constants/data';
import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/shared/logo';

type TMobileSidebarProps = {
  className?: string;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  sidebarOpen: boolean;
};
export default function MobileSidebar({
  setSidebarOpen,
  sidebarOpen
}: TMobileSidebarProps) {
  return (
    <>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="bg-background !px-0">
          <div className="space-y-4 py-4">
            <div className="space-y-4 px-3 py-2">
              <Link to="/" className="">
                <Logo className="ml-4 h-12 w-24" />
              </Link>
              <div className="space-y-1 px-2">
                <DashboardNav
                  items={navItems}
                  setOpen={setSidebarOpen}
                  isMobileNav={true}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
