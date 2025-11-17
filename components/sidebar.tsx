"use client";

import {
  Pin,
  List,
  Grid3x3,
  ArrowRight,
  File,
  GitBranch,
  Link2,
  Layers,
  Box,
  ArrowUpDown,
  FileText,
  X,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: List, label: "Mảng 1 chiều", href: "/mang-1-chieu" },
    { icon: Grid3x3, label: "Mảng 2 chiều", href: "/mang-2-chieu" },
    { icon: ArrowRight, label: "Con trỏ hàm", href: "/con-tro-ham" },
    { icon: File, label: "Đọc & Ghi tập tin nhị phân", href: "/doc-ghi-tap-tin" },
    { icon: GitBranch, label: "Đệ quy", href: "/de-quy" },
    { icon: Link2, label: "Danh sách liên kết đơn", href: "/danh-sach-lien-ket" },
    { icon: Layers, label: "Stack", href: "/stack" },
    { icon: Box, label: "Queue", href: "/queue" },
    { icon: ArrowUpDown, label: "Các thuật toán sắp xếp", href: "/sap-xep" },
    { icon: FileText, label: "Đề 31/05/2025", href: "/de-thi" },
    { icon: FileText, label: "Đề HK2/2024–2025", href: "/de-thi" },
    { icon: FileText, label: "Đề 18/11/2023", href: "/de-thi" },
    { icon: FileText, label: "Đề 13/11/2022", href: "/de-thi" },
    { icon: FileText, label: "Đề 29/05/2022", href: "/de-thi" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          style={{ maxWidth: "416px" }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-56 bg-sidebar border-r border-sidebar-border flex flex-col z-50 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ maxHeight: "496px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-2 border-b border-sidebar-border">
          <h2 className="text-xs font-semibold text-sidebar-foreground truncate">
            Danh sách chủ đề
          </h2>
          <button
            onClick={onClose}
            className="p-0.5 hover:bg-sidebar-accent rounded flex-shrink-0"
            aria-label="Close menu"
          >
            <X size={14} className="text-sidebar-foreground" />
          </button>
        </div>

        {/* Menu Items - Scrollable */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-0.5 p-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>
                  <button
                    onClick={onClose}
                    className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-sidebar-accent transition-colors group cursor-pointer text-sidebar-foreground hover:text-sidebar-accent-foreground text-left"
                    title={item.label}
                  >
                    <item.icon size={14} className="flex-shrink-0" />
                    <span className="text-xs truncate">{item.label}</span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-2">
          <div className="w-full h-4 border border-sidebar-foreground rounded-sm flex items-center justify-center text-[9px] font-bold text-sidebar-foreground">
            85%
          </div>
        </div>
      </aside>
    </>
  );
}
