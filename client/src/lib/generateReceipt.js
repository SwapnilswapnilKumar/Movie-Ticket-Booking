import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateReceiptPDF = (booking, user, currency) => {
  const doc = new jsPDF();

  doc.setFillColor(30, 41, 59); 
  doc.rect(0, 0, 210, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.text("Cinema Cloud", 105, 17, { align: "center" });

  doc.setTextColor(40, 40, 40);
  doc.setFontSize(16);
  doc.text("Booking Receipt", 105, 35, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(80, 80, 80);
  doc.text("Customer Information", 14, 48);
  doc.setTextColor(0, 0, 0);
  
  doc.text(`Email: ${user.emailAddresses[0].emailAddress}`, 14, 64);

  doc.setTextColor(80, 80, 80);
  doc.text("Show Details", 14, 76);
  autoTable(doc, {
    startY: 80,
    head: [["Movie", "Date & Time", "Runtime"]],
    body: [[
      booking.show?.movie?.title || "N/A",
      new Date(booking.show?.showDateTime || new Date()).toLocaleString(),
      `${booking.show?.movie?.runtime || "N/A"} min`
    ]],
    styles: { fontSize: 11, cellPadding: 4 },
    headStyles: { fillColor: [99, 102, 241], textColor: 255, halign: "center" },
    bodyStyles: { halign: "center" }
  });

  const prevY = doc.lastAutoTable?.finalY || 90;
  const nextY = prevY + 10;

  doc.setTextColor(80, 80, 80);
  doc.text("Ticket Summary", 14, nextY);

  autoTable(doc, {
    startY: nextY + 4,
    head: [["Seats", "Total Tickets", "Amount Paid"]],
    body: [[
      booking.bookedSeats?.join(", ") || "N/A",
      booking.bookedSeats?.length || 0,
      `${currency} ${booking.amount || 0}`
    ]],
    styles: { fontSize: 11, cellPadding: 4 },
    headStyles: { fillColor: [16, 185, 129], textColor: 255, halign: "center" },
    bodyStyles: { halign: "center" }
  });

  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  doc.text(
    "Thank you for booking with Cinema Cloud!",
    105,
    doc.internal.pageSize.height - 20,
    { align: "center" }
  );

  doc.save(`receipt-${booking._id}.pdf`);
};
