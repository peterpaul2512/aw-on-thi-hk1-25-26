"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function NguyenLyBuTruPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examples = [
    {
      title: "Định lý: Chia hết",
      content: `The number of positive integers ≤ n that are divisible by k is ⌊n/k⌋.

Ví dụ:
- Số các số ≤ 1000 chia hết cho 7: ⌊1000/7⌋ = 142
- Số các số ≤ 2000 chia hết cho 15: ⌊2000/15⌋ = 133

Định lý này là nền tảng cho nguyên lý bù trừ (Inclusion-Exclusion Principle).`,
    },
    {
      title: "Ví dụ 5: Nguyên tố cùng nhau với 70",
      content: `Có bao nhiêu số nguyên dương nhỏ hơn hoặc bằng 1000 và nguyên tố cùng nhau với 70?

Giải:
Gọi U = {1, 2, ..., 1000}
Vì 70 = 2 × 5 × 7, số nguyên tố cùng nhau với 70 tức là không chia hết cho 2, 5, 7.

Đặt:
- A: tập số chia hết cho 2
- B: tập số chia hết cho 5
- C: tập số chia hết cho 7

Ta cần |A̅ ∩ B̅ ∩ C̅|

Tính:
|U| = 1000
|A| = ⌊1000/2⌋ = 500
|B| = ⌊1000/5⌋ = 200
|C| = ⌊1000/7⌋ = 142

|A ∩ B| = ⌊1000/10⌋ = 100
|A ∩ C| = ⌊1000/14⌋ = 71
|B ∩ C| = ⌊1000/35⌋ = 28

|A ∩ B ∩ C| = ⌊1000/70⌋ = 14

Theo bao hàm – loại trừ cho 3 tập:
|A̅ ∩ B̅ ∩ C̅| = |U| - |A| - |B| - |C| + |A∩B| + |A∩C| + |B∩C| - |A∩B∩C|
            = 1000 - 500 - 200 - 142 + 100 + 71 + 28 - 14
            = 343

Vậy có 343 số nguyên dương ≤ 1000 nguyên tố cùng nhau với 70.`,
    },
    {
      title: "Ví dụ 6: Nguyên tố cùng nhau với 200",
      content: `How many positive integers that less than or equal 2000 and co-prime with 200?

Giải:
200 = 2³ × 5² = 8 × 25

Gọi U = {1, 2, ..., 2000}
Số nguyên tố cùng nhau với 200 là số không chia hết cho 2 và 5.

Đặt:
- A: tập số chia hết cho 2
- B: tập số chia hết cho 5

Tính:
|U| = 2000
|A| = ⌊2000/2⌋ = 1000
|B| = ⌊2000/5⌋ = 400
|A ∩ B| = ⌊2000/10⌋ = 200

Theo công thức bù trừ cho 2 tập:
|A̅ ∩ B̅| = |U| - |A| - |B| + |A∩B|
        = 2000 - 1000 - 400 + 200
        = 800

Vậy có 800 số nguyên dương ≤ 2000 nguyên tố cùng nhau với 200.`,
    },
    {
      title: "Ví dụ 7: Nguyên tố cùng nhau với 396",
      content: `How many positive integers that less than or equal 2000 and co-prime with 396?

Giải:
396 = 4 × 99 = 4 × 9 × 11 = 2² × 3² × 11

Gọi U = {1, 2, ..., 2000}
Số nguyên tố cùng nhau với 396 là số không chia hết cho 2, 3, và 11.

Đặt:
- A: tập số chia hết cho 2
- B: tập số chia hết cho 3
- C: tập số chia hết cho 11

Tính:
|A| = ⌊2000/2⌋ = 1000
|B| = ⌊2000/3⌋ = 666
|C| = ⌊2000/11⌋ = 181

|A ∩ B| = ⌊2000/6⌋ = 333
|A ∩ C| = ⌊2000/22⌋ = 90
|B ∩ C| = ⌊2000/33⌋ = 60

|A ∩ B ∩ C| = ⌊2000/66⌋ = 30

|A̅ ∩ B̅ ∩ C̅| = 2000 - 1000 - 666 - 181 + 333 + 90 + 60 - 30
            = 606

Vậy có 606 số nguyên dương ≤ 2000 nguyên tố cùng nhau với 396.`,
    },
    {
      title: "Ví dụ 8: Phương trình với điều kiện",
      content: `Find the number of non-negative integer solutions of this given equation:
x₁ + x₂ + x₃ + x₄ = 18 (*) 
such that xᵢ ≤ 7, ∀i = 1, 2, 3, 4.

Giải:
Bước 1: Không có điều kiện
Số nghiệm nguyên không âm của (*) là:
C(18+4-1, 4-1) = C(21, 3) = 1330

Bước 2: Áp dụng bù trừ với điều kiện xᵢ ≤ 7

Gọi Aᵢ là tập nghiệm có xᵢ ≥ 8

|A₁|: Đặt x₁ = 8 + y₁ (y₁ ≥ 0)
→ (8+y₁) + x₂ + x₃ + x₄ = 18
→ y₁ + x₂ + x₃ + x₄ = 10
→ |A₁| = C(10+4-1, 4-1) = C(13, 3) = 286

Tương tự: |A₂| = |A₃| = |A₄| = 286

|A₁ ∩ A₂|: x₁, x₂ ≥ 8
→ (8+y₁) + (8+y₂) + x₃ + x₄ = 18
→ y₁ + y₂ + x₃ + x₄ = 2
→ |A₁ ∩ A₂| = C(5, 3) = 10

Tương tự: Tất cả các giao của 2 tập = 10, có C(4,2) = 6 cặp

|A₁ ∩ A₂ ∩ A₃|: x₁, x₂, x₃ ≥ 8
→ y₁ + y₂ + y₃ + x₄ = -6 < 0
→ Không có nghiệm, |A₁ ∩ A₂ ∩ A₃| = 0

Áp dụng bù trừ:
Số nghiệm = 1330 - 4×286 + 6×10 - 0 + 0
          = 1330 - 1144 + 60
          = 246 nghiệm`,
    },
    {
      title: "Ví dụ 9a: Rút 6 lá bài - Cả 4 chất",
      content: `Có bao nhiêu cách rút 6 lá bài từ bộ bài 52 lá sao cho cả 4 chất (cơ, rô, chuồn và bích) đều được biểu diễn?

Giải:
Gọi U: tập tất cả các bộ 6 lá
|U| = C(52, 6)

Gọi Aᵢ: tập các bộ 6 lá thiếu chất thứ i

Ta cần: |A̅₁ ∩ A̅₂ ∩ A̅₃ ∩ A̅₄| (cả 4 chất đều có)

|A₁|: Chọn 6 lá từ 3 chất còn lại (39 lá)
→ |A₁| = C(39, 6)
Tương tự: |A₂| = |A₃| = |A₄| = C(39, 6)

|A₁ ∩ A₂|: Thiếu 2 chất, chọn từ 26 lá
→ |A₁ ∩ A₂| = C(26, 6)
Có C(4, 2) = 6 cặp

|A₁ ∩ A₂ ∩ A₃|: Thiếu 3 chất, chỉ còn 13 lá
→ |A₁ ∩ A₂ ∩ A₃| = C(13, 6)
Có C(4, 3) = 4 bộ ba

|A₁ ∩ A₂ ∩ A₃ ∩ A₄| = 0 (không thể rút 6 lá từ 0 lá)

Theo bù trừ:
Số cách = C(52,6) - 4×C(39,6) + 6×C(26,6) - 4×C(13,6) + 0`,
    },
    {
      title: "Ví dụ 9b: Rút 6 lá bài - Ít nhất 1 chất thiếu",
      content: `Có bao nhiêu cách rút 6 lá bài sao cho ít nhất một chất không được biểu diễn?

Giải:
Đây chính là phần bù của câu a)

Ta cần: |A₁ ∪ A₂ ∪ A₃ ∪ A₄|

Theo bù trừ:
|A₁ ∪ A₂ ∪ A₃ ∪ A₄| = S₁ - S₂ + S₃ - S₄

Trong đó:
S₁ = |A₁| + |A₂| + |A₃| + |A₄| = 4×C(39,6)

S₂ = Σ|Aᵢ ∩ Aⱼ| = C(4,2)×C(26,6) = 6×C(26,6)

S₃ = Σ|Aᵢ ∩ Aⱼ ∩ Aₖ| = C(4,3)×C(13,6) = 4×C(13,6)

S₄ = 0

Vậy số cách = 4×C(39,6) - 6×C(26,6) + 4×C(13,6) - 0`,
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
          <h1 className="text-sm font-semibold">Nguyên Lý Bù Trừ</h1>
          <div className="w-4" />
        </header>

        {/* Content Area - Scrollable */}
        <main className="flex-1 overflow-y-auto p-1 space-y-1">
          {examples.map((example, index) => (
            <Card key={index} className="p-1.5 bg-card border border-border">
              <h3 className="text-xs font-semibold text-foreground mb-1">
                {example.title}
              </h3>
              <div className="relative bg-muted rounded p-1.5 mb-1">
                <div className="text-[10px] overflow-x-auto text-muted-foreground whitespace-pre-wrap break-words leading-tight">
                  {example.content}
                </div>
                <button
                  onClick={() => copyToClipboard(example.content, index)}
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
          Nguyên lý bao hàm - loại trừ
        </footer>
      </div>
    </div>
  );
}
