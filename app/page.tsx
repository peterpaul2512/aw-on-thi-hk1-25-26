"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "@/components/sidebar";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden" style={{ maxWidth: "416px", maxHeight: "496px" }}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-2 border-b border-border bg-card">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-accent rounded transition-colors"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <h1 className="text-sm font-semibold">Ôn Thi</h1>
          <div className="w-4" />
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-1.5 space-y-1.5">
          <Card className="p-2 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <h2 className="text-xs font-semibold text-foreground mb-1">Chào mừng!</h2>
            <p className="text-[10px] text-muted-foreground">Nhấn menu để xem danh sách các chủ đề ôn thi</p>
          </Card>

          <Card className="p-2 bg-card border border-border">
            <h3 className="text-xs font-semibold text-foreground mb-1">📚 Danh sách chủ đề:</h3>
            <ul className="text-[10px] text-muted-foreground space-y-0.5">
              <li>• Mảng 1 chiều</li>
              <li>• Mảng 2 chiều</li>
              <li>• Con trỏ hàm</li>
              <li>• Đọc & Ghi tập tin</li>
              <li>• Đệ quy</li>
              <li>• Danh sách liên kết</li>
              <li>• Stack</li>
              <li>• Queue</li>
              <li>• Sắp xếp</li>
              <li>• Đề thi</li>
            </ul>
          </Card>

          <Card className="p-2 bg-card border border-border">
            <h3 className="text-xs font-semibold text-foreground mb-1">💡 Hướng dẫn:</h3>
            <p className="text-[10px] text-muted-foreground">
              Mỗi chủ đề chứa các hàm. Nhấn copy để sao chép code.
            </p>
          </Card>
        </main>

        {/* Footer */}
        <footer className="p-1.5 border-t border-border bg-card text-center text-xs text-muted-foreground">
          Ôn Thi - Cấu Trúc Dữ Liệu
        </footer>
      </div>
    </div>
  );
}
