/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Hiển thị contact
 * - Thêm contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var fs = require('fs');
var readLineSync = require('readline-sync');

var contacts = [];

function showAllContact() {
    var realFileJSON = fs.readFileSync('./data.json', {
        ecoding: 'utf8'
    });
    contacts = JSON.parse(realFileJSON);
    for (var contact of contacts) {
        console.log('Name: ' + contact.name + ' - Phone: ' + contact.phone);
    }
}

function createNewContact() {
    var name = readLineSync.question('* Name: ');
    var phone = readLineSync.question('* Phone: ');
    var infor = {
        name: name,
        phone: phone
    };
    contacts.push(infor);
    var convertToJSON = JSON.stringify(contacts);
    fs.writeFileSync('./data.json', convertToJSON, {
        encoding: 'utf8'
    });
    console.log('You have successfully added contacts!');
   
}



function editContact() {

    var choose = readLineSync.question('* Edit Name (N) or edit Phone(P): ');
    if (choose == 'n' || choose == 'N') {
        var currentName = readLineSync.question('Current name: ');
        var newName = readLineSync.question('New name: ');

        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].name == currentName) {
                var savePhone = contacts[i].phone;
                contacts.splice(i, 1);
                var editName = {
                    name: newName,
                    phone: savePhone
                };
                contacts.push(editName);
                var edit = JSON.stringify(contacts);
                fs.writeFileSync('./data.json', edit, {
                    ecoding: 'utf8'
                });

            }
        }
        console.log('You changed the contact name successfully!');
    } else if (choose == 'p' || choose == 'P') {
        var currentPhone = readLineSync.question('Current phone: ');
        var newPhone = readLineSync.question('New phone: ');

        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].phone == currentPhone) {
                var saveName = contacts[i].name;
                contacts.splice(i, 1);
                var editPhone = {
                    name: saveName,
                    phone: newPhone
                };
                contacts.push(editPhone);
                var edit = JSON.stringify(contacts);
                fs.writeFileSync('./data.json', edit, {
                    ecoding: 'utf8'
                });

            }
        }
        console.log('You changed the phone number successfully!');
    }


}

function removeContact() {
    var remove = readLineSync.question('Select the contact you want to delete: ');

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].name == remove) {
            contacts.splice(i, 1);
            var edit = JSON.stringify(contacts);
            fs.writeFileSync('./data.json', edit, {
                ecoding: 'utf8'
            });

        }
    }
    console.log('You deleted the contact successfully!');
}

function searchContact() {
    var search = readLineSync.question('Select the contact you want to search: ');

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].name == search) {
            console.log(contacts[i]);

        }
    }
    console.log('You deleted the contact successfully!');

}

function main() {
    console.log('1. Show all contact');
    console.log('2. Create a new contact');
    console.log('3. Edit contact');
    console.log('4. Remove contact');
    console.log('5. Search contact');
    var press = readLineSync.question('*** Press: ');
    switch (press) {
        case '1':
            showAllContact();
            main();
            break;
        case '2':
            createNewContact();
            main();
            break;
        case '3':
            editContact();
            main();
            break;
        case '4':
            removeContact();
            main();
            break;
        case '5':
            searchContact();
            main();
        default:
            break;
    }
}
main();