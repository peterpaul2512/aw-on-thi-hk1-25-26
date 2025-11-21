"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function DeThamKhaoPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const questions = [
    {
      title: "Câu 1.1: Nguyên lý Dirichlet - Tháng sinh",
      content: `Trong một lớp học có ít nhất bao nhiêu sinh viên để có ít nhất 15 sinh viên có cùng tháng sinh?

Giải:
Có 12 tháng trong năm.

Để đảm bảo có ít nhất 15 người cùng tháng sinh, ta áp dụng nguyên lý Dirichlet mở rộng:
Cần ít nhất: 12 × (15 - 1) + 1 = 12 × 14 + 1 = 168 + 1 = 169

Đáp án: 169 sinh viên`,
    },
    {
      title: "Câu 1.2: Sắp xếp với điều kiện",
      content: `Có bao nhiêu cách sắp xếp 3 nữ và 5 nam thành một hàng dọc sao cho người đứng đầu hàng là nam và 3 nữ luôn đứng liền nhau?

Giải:
Bước 1: Gom 3 nữ thành 1 khối
→ Có 5 nam + 1 khối (3 nữ) = 6 đối tượng

Bước 2: Chọn 1 nam đứng đầu hàng
→ 5 cách chọn

Bước 3: Sắp xếp 5 đối tượng còn lại (4 nam + 1 khối)
→ 5! cách

Bước 4: Sắp xếp 3 nữ trong khối
→ 3! cách

Tổng: 5 × 5! × 3! = 5 × 120 × 6 = 3,600

Đáp án: 3,600 cách`,
    },
    {
      title: "Câu 1.3: Chọn ban cán sự với điều kiện",
      content: `Một lớp có 15 nam và 10 nữ, có bao nhiêu cách chọn ban cán sự lớp 3 người gồm một lớp trưởng, một lớp phó và một thủ quỹ mà trong đó phải có ít nhất 2 nam?

Giải:
Ít nhất 2 nam = có đúng 2 nam hoặc có đúng 3 nam

Trường hợp 1: Có đúng 2 nam, 1 nữ
- Chọn 2 nam từ 15: C(15,2)
- Chọn 1 nữ từ 10: C(10,1) = 10
- Phân công 3 vị trí: 3!
→ C(15,2) × 10 × 3! = 105 × 10 × 6 = 6,300

Trường hợp 2: Có đúng 3 nam
- Chọn 3 nam từ 15: C(15,3)
- Phân công 3 vị trí: 3!
→ C(15,3) × 3! = 455 × 6 = 2,730

Tổng: 6,300 + 2,730 = 9,030

Đáp án: 9,030 cách`,
    },
    {
      title: "Câu 1.4: Tập con với điều kiện",
      content: `Cho X = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}. 
Tìm số tập con A của X có đúng 5 phần tử sao cho phần tử lớn nhất của A là 7 hoặc 10.

Giải:
Trường hợp 1: Phần tử lớn nhất là 7
→ A chứa 7 và 4 phần tử từ {1, 2, 3, 4, 5, 6}
→ C(6,4) = 15

Trường hợp 2: Phần tử lớn nhất là 10
→ A chứa 10 và 4 phần tử từ {1, 2, 3, 4, 5, 6, 7, 8, 9} (không chứa 11)
→ C(9,4) = 126

Tổng: 15 + 126 = 141

Đáp án: 141 tập con`,
    },
    {
      title: "Câu 1.5: Số có 10 chữ số với điều kiện",
      content: `Từ các chữ số 0, 1 và 2 ta lập được bao nhiêu số có 10 chữ số mà trong đó chữ số 2 có mặt đúng 5 lần và chữ số 1 có mặt đúng 2 lần?

Giải:
Vì chữ số 2 xuất hiện 5 lần, chữ số 1 xuất hiện 2 lần
→ Chữ số 0 xuất hiện: 10 - 5 - 2 = 3 lần

Số các số có dạng này (kể cả bắt đầu bằng 0):
10!/(5! × 2! × 3!) = 3,628,800/(120 × 2 × 6) = 3,628,800/1,440 = 2,520

Loại trừ các số bắt đầu bằng 0:
- Vị trí đầu là 0, còn 9 vị trí
- Chữ số 2: 5 lần, chữ số 1: 2 lần, chữ số 0: 2 lần
→ 9!/(5! × 2! × 2!) = 362,880/(120 × 2 × 2) = 756

Đáp án: 2,520 - 756 = 1,764 số

(Lưu ý: Nếu đề cho phép số bắt đầu bằng 0 thì đáp án là 2,520)`,
    },
    {
      title: "Câu 1.6: Phương trình nghiệm nguyên",
      content: `Tìm số nghiệm nguyên không âm của phương trình x + y + z + t = 18 
thỏa điều kiện 4 ≤ x ≤ 10 và y ≥ 3.

Giải:
Đặt: x' = x - 4 (≥ 0), y' = y - 3 (≥ 0)

Phương trình trở thành:
x' + y' + z + t = 18 - 4 - 3 = 11

với điều kiện: x' ≤ 6 (từ x ≤ 10)

Bước 1: Không có ràng buộc trên
Số nghiệm: C(11+4-1, 4-1) = C(14, 3) = 364

Bước 2: Loại nghiệm có x' ≥ 7
Đặt x'' = x' - 7 (≥ 0)
→ x'' + y' + z + t = 11 - 7 = 4
→ Số nghiệm: C(4+4-1, 3) = C(7, 3) = 35

Kết quả: 364 - 35 = 329

Đáp án: 329 nghiệm`,
    },
    {
      title: "Câu 1.7: Hệ số khai triển đa thức",
      content: `Tìm hệ số của x²y⁶z²t trong khai triển (4x - 2y² - z + 3t)⁸.

Giải:
Biểu thức: (4x - 2y² - z + 3t)⁸

Ta cần chọn số lần xuất hiện:
- 4x: 2 lần → cho x²
- -2y²: 3 lần → cho y⁶
- -z: 2 lần → cho z²
- 3t: 1 lần → cho t

Tổng số lần = 2 + 3 + 2 + 1 = 8 ✓

Hệ số = 8!/(2!×3!×2!×1!) × (4)² × (-2)³ × (-1)² × (3)

Tính:
- 8!/(2!×3!×2!) = 40,320/(2×6×2) = 1,680
- 4² = 16
- (-2)³ = -8
- (-1)² = 1
- 3 = 3

→ 1,680 × 16 × (-8) × 1 × 3
= 1,680 × 16 × (-24)
= 1,680 × (-384)
= -645,120

Đáp án: -645,120`,
    },
    {
      title: "Câu 1.8: Hệ số x⁷ trong khai triển",
      content: `Tìm hệ số của x⁷ trong khai triển (1 - 2x + 3x⁴)⁶.

Giải:
Gọi ta chọn trong mỗi thừa số:
- 1 → m lần
- -2x → a lần
- 3x⁴ → b lần

Điều kiện:
- m + a + b = 6
- a + 4b = 7 (để có x⁷)

Xét các nghiệm:

▪ b = 1:
a + 4 = 7 → a = 3
m = 6 - 3 - 1 = 2

Hệ số: 6!/(2!×3!×1!) × (1)² × (-2)³ × (3)¹
     = 720/(2×6×1) × 1 × (-8) × 3
     = 60 × (-8) × 3
     = -1,440

▪ b = 0:
a = 7 → không được (vì a ≤ 6)

▪ b ≥ 2:
a + 4b ≥ 8 > 7 → không thỏa

Đáp án: -1,440`,
    },
  ];

  return (
    <div
      className="flex h-screen bg-background text-foreground overflow-hidden"
      style={{ maxWidth: "416px", maxHeight: "496px" }}
    >
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
            <Menu size={18} />
          </button>
          <h1 className="text-sm font-semibold">Đề Tham Khảo</h1>
          <div className="w-4" />
        </header>

        {/* Content Area - Scrollable */}
        <main className="flex-1 overflow-y-auto p-1 space-y-1">
          {questions.map((question, index) => (
            <Card key={index} className="p-1.5 bg-card border border-border">
              <h3 className="text-xs font-semibold text-foreground mb-1">
                {question.title}
              </h3>
              <div className="relative bg-muted rounded p-1.5 mb-1">
                <div className="text-[10px] text-muted-foreground whitespace-pre-wrap break-words leading-tight">
                  {question.content}
                </div>
                <button
                  onClick={() => copyToClipboard(question.content, index)}
                  className="absolute top-1 right-1 p-0.5 bg-primary hover:bg-primary/90 rounded transition-colors"
                  title="Copy content"
                >
                  {copiedIndex === index ? (
                    <Check size={12} className="text-primary-foreground" />
                  ) : (
                    <Copy size={12} className="text-primary-foreground" />
                  )}
                </button>
              </div>
            </Card>
          ))}
        </main>

        {/* Footer */}
        <footer className="p-1.5 border-t border-border bg-card text-center text-xs text-muted-foreground">
          Đề thi tham khảo Toán Tổ Hợp
        </footer>
      </div>
    </div>
  );
}
