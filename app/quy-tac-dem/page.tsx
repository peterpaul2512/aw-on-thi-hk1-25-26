"use client";

import { useState } from "react";
import { Menu, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/sidebar";

export default function QuyTacDemPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examples = [
    {
      title: "Ví dụ 3: Mapping và Injective Function",
      content: `Set A has 6 elements and set B has 10 elements. How many:

a) Mappings from A to B?
Mỗi phần tử trong A có 10 lựa chọn trong B
→ Số mapping: 10^6 = 1,000,000

b) Injective function from A to B?
Chọn và sắp xếp 6 phần tử từ 10 phần tử của B
→ Số injective function: P(10,6) = 10!/(10-6)! = 151,200`,
    },
    {
      title: "Ví dụ 5: Chọn 2 cuốn sách khác ngôn ngữ",
      content: `There are five different Spanish books, six different French books, and eight different Transylvanian books. 
How many ways are there to pick an (unordered) pair of two books not both in the same language?

Giải: Chọn 2 sách từ 2 ngôn ngữ khác nhau:
- Spanish & French: 5 × 6 = 30
- Spanish & Transylvanian: 5 × 8 = 40
- French & Transylvanian: 6 × 8 = 48

→ Tổng: 30 + 40 + 48 = 118 cách`,
    },
    {
      title: "Ví dụ 6: Tạo dãy 3 chữ cái từ a,b,c,d,e,f",
      content: `How many ways are there to form a three-letter sequence using the letters a, b, c, d, e, f:

i. With repetition of letters allowed?
→ 6^3 = 216

ii. Without repetition of any letter?
→ P(6,3) = 6!/(6-3)! = 120

iii. Without repetition and containing the letter e?
→ C(3,1) × P(5,2) = 3 × 20 = 60

iv. With repetition and containing e?
→ C(3,1)×5^2 + C(3,2)×5^1 + C(3,3)×5^0
→ 3×25 + 3×5 + 1×1 = 75 + 15 + 1 = 91`,
    },
    {
      title: "Ví dụ 7: Nguyên lý Dirichlet - Học lực",
      content: `How many students must there be in a class to have at least 6 students with the same learning level, 
knowing that there are 5 types of learning levels: A, B, C, D, and E?

Giải: Gọi N là số học sinh trong lớp.
Theo nguyên lý Dirichlet: N/5 ≥ 6
→ N ≥ 30 → N > 25

Vậy cần ít nhất N = 26 học sinh để đảm bảo có ít nhất 6 học sinh cùng trình độ.`,
    },
    {
      title: "Ví dụ 8: Hiệu chia hết cho 9",
      content: `Chứng minh rằng trong 10 số tự nhiên bất kỳ, ta có thể chọn ra hai số có hiệu chia hết cho 9.

Chứng minh:
Khi chia 10 số bất kỳ cho 9, mỗi số sẽ có một số dư nằm trong 9 số từ 0 đến 8.
Do đó, theo nguyên lý Dirichlet, phải tồn tại ít nhất hai số có cùng số dư.
Khi đó hiệu của hai số đó phải chia hết cho 9. ∎`,
    },
    {
      title: "Ví dụ 9: Tổng bằng 10",
      content: `Cho X = {1, 2, 3, 4, 5, 6, 7, 8, 9} và A là tập con của X có 6 phần tử. 
Chứng minh rằng, trong A phải có hai phần tử mà tổng của chúng bằng đúng 10.

Giải:
Xét 5 nhóm: {1,9}, {2,8}, {3,7}, {4,6}, và {5}

Khi chọn 6 phần tử từ X, theo nguyên lý Dirichlet, chắc chắn có hai phần tử rơi vào cùng một nhóm.
Do đó hai phần tử ấy có tổng bằng 10. ∎`,
    },
    {
      title: "Ví dụ 10: Số người quen",
      content: `Trong một phòng họp có n người, hãy chứng minh rằng luôn có 2 người có số người quen bằng nhau 
trong số những người tham dự cuộc họp. Lưu ý rằng không có ai là không có người quen.

Giải:
Số người quen của 1 người nằm trong {1, 2, ..., n-1}

Nếu có n người nhưng chỉ có n-1 giá trị khác nhau để nhận,
thì chắc chắn phải có ít nhất hai người có số người quen trùng nhau.

→ Tồn tại hai người có cùng số người quen trong phòng. ∎`,
    },
    {
      title: "Ví dụ 11: Nguyên tố cùng nhau",
      content: `Chọn n+1 số tự nhiên từ 1 đến 2n, chứng tỏ rằng luôn tồn tại 2 số nguyên tố cùng nhau.

Giải:
Ta có n cặp các số liên tiếp: {1,2}, {3,4}, {5,6}, ..., {2n-1, 2n}

Các số liên tiếp nhau luôn nguyên tố cùng nhau (gcd=1).

Khi chọn n+1 số từ 1 đến 2n, theo nguyên lý Dirichlet, sẽ có ít nhất 2 số thuộc cùng một cặp.

→ Luôn tồn tại 2 số nguyên tố cùng nhau. ∎`,
    },
    {
      title: "Ví dụ 13: Sắp xếp chữ SYSTEMS",
      content: `Có bao nhiêu cách sắp xếp bảy chữ cái trong từ SYSTEMS?
Trong bao nhiêu cách sắp xếp này, ba chữ S xuất hiện liên tiếp?

a) Tổng số cách sắp xếp "SYSTEMS"
Có 7 chữ, trong đó chữ S lặp 3 lần
→ Số hoán vị: 7!/3! = 5040/6 = 840

b) Số cách để 3 chữ S đứng liền nhau
Gộp "SSS" thành 1 khối → có 5 đối tượng: {SSS}, Y, T, E, M
→ Số cách sắp: 5! = 120`,
    },
    {
      title: "Ví dụ 13 (tt): SYSTEMS với điều kiện E trước M",
      content: `Có bao nhiêu cách sắp xếp SYSTEMS có E đứng trước M?
Có bao nhiêu cách có E trước M và ba chữ S liên tiếp?

a) E đứng trước M:
Tổng số cách: 7!/3! = 840
Trong mọi hoán vị, E và M là phân biệt
→ Một nửa có E trước M, một nửa có M trước E
→ Số cách có E trước M: 840/2 = 420

b) E trước M VÀ SSS liên tiếp:
Gom SSS thành 1 khối → 5 đối tượng: {SSS}, Y, T, E, M
→ Tổng: 5! = 120
→ Một nửa có E trước M: 120/2 = 60`,
    },
    {
      title: "Ví dụ 15: Chuỗi A và U với điều kiện",
      content: `Một nhà máy sản xuất lò nướng. Ở giai đoạn cuối, thanh tra đánh dấu A (chấp nhận) hoặc U (không chấp nhận).
Có bao nhiêu chuỗi 15 chữ cái As và Us khác nhau, trong đó chữ U thứ ba xuất hiện ở vị trí 12?

Giải:
- Vị trí 12 cố định là U (U thứ 3) → 1 cách
- Chọn 2 vị trí trong 11 vị trí đầu để đặt 2 chữ U còn lại → C(11,2)
- 3 vị trí cuối (13,14,15) có thể là A hoặc U → 2^3

→ Tổng: C(11,2) × 2^3 = 55 × 8 = 440`,
    },
    {
      title: "Ví dụ 16: Số 4 chữ số với chữ số lặp",
      content: `Probability of Repeated Digits in 4-digit numbers:

a) Cả 4 chữ số giống nhau (aaaa)
→ Chọn 1 chữ số: 10 cách

b) 3 chữ số giống nhau, 1 khác (aaab)
- Chọn chữ số cho bộ ba: 10
- Chọn chữ số khác: 9
- Chọn vị trí cho chữ số khác: C(4,1) = 4
→ 10 × 9 × 4 = 360

c) Hai cặp giống nhau (aabb)
- Chọn 2 chữ số khác nhau: C(10,2) = 45
- Sắp xếp dạng aabb: 4!/(2!×2!) = 6
→ 45 × 6 = 270

d) Một cặp giống, hai chữ số khác (aabc)
- Chọn chữ số cho cặp: 10
- Chọn 2 chữ số khác: C(9,2) = 36
- Sắp xếp aabc: 4!/2! = 12
→ 10 × 36 × 12 = 4320`,
    },
    {
      title: "Ví dụ 17: Sắp xếp chữ BANANA",
      content: `How many arrangements are there of the six letters b, a, n, a, n, a?

Chữ BANANA có 6 chữ cái:
- a xuất hiện 3 lần
- n xuất hiện 2 lần
- b xuất hiện 1 lần

Số hoán vị của 6 phần tử với các chữ lặp:
→ 6!/(3! × 2!) = 720/(6 × 2) = 720/12 = 60`,
    },
    {
      title: "Ví dụ 18: Chọn Hot Dog có lặp",
      content: `How many different ways are there to select six hot dogs from three varieties of hot dog?

Có 3 loại hot dog và cần chọn 6 cái, được phép chọn nhiều cái giống nhau.

Công thức đếm số cách chọn có lặp (combination with repetition):
C(n+r-1, r) = C(3+6-1, 6) = C(8, 6) = C(8, 2) = 28

→ Có 28 cách chọn.`,
    },
    {
      title: "Ví dụ 20: Sắp xếp chuỗi DNA",
      content: `7 đoạn còn lại (AC, AC, AAATC, C, C, C, TGGC) đều kết thúc bằng C, 
có thể xếp ở 7 vị trí đầu theo mọi thứ tự.

Vì có lặp:
- AC xuất hiện 2 lần
- C xuất hiện 3 lần

Số cách sắp xếp:
→ 7!/(2! × 3!) = 5040/(2 × 6) = 5040/12 = 420`,
    },
    {
      title: "Ví dụ 24: Phân công nhà ngoại giao",
      content: `Có bao nhiêu cách phân công 100 nhà ngoại giao khác nhau đến 5 châu lục khác nhau?
Có bao nhiêu cách phân công 20 nhà ngoại giao đến mỗi châu lục?

a) Mỗi nhà ngoại giao chọn 1 trong 5 châu:
Mỗi người có 5 lựa chọn
→ 5^100 cách

b) Chia đều 20 người cho mỗi châu:
Đây là bài toán chia 100 phần tử phân biệt vào 5 hộp phân biệt, mỗi hộp 20 phần tử
→ 100!/(20!^5) cách`,
    },
    {
      title: "Bài tập: Bày mâm ngũ quả",
      content: `Đi chợ mua 20 loại quả: trong đó có 5 cam, 10 xoài, 4 thanh long, 1 dưa hấu.
Có bao nhiêu cách để bày mâm ngũ quả?

Giải:
Cần chọn 5 quả từ 20 quả (có 4 loại khác nhau)

Đây là bài toán tổ hợp có lặp với điều kiện giới hạn số lượng mỗi loại:
- Cam: tối đa 5
- Xoài: tối đa 10
- Thanh long: tối đa 4
- Dưa hấu: tối đa 1

Sử dụng nguyên lý bù trừ để đếm.`,
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
          <h1 className="text-sm font-semibold">Quy tắc đếm</h1>
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
          Các quy tắc đếm cơ bản
        </footer>
      </div>
    </div>
  );
}
