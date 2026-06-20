// Enum Example - TypeScript

// Creating a set of named constants.
// பெயரிடப்பட்ட constant values உருவாக்கப்படுகின்றன.
enum OrderStatus {
  Pending,
  Approved,
  Rejected
}

// Creating a variable using enum.
// enum value பயன்படுத்தி variable உருவாக்கப்படுகிறது.
let currentStatus: OrderStatus = OrderStatus.Approved;

// Display the current status.
// தற்போதைய status-ஐ காட்டுகிறது.
console.log(currentStatus);