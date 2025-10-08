<?php

class Company {

    protected $companyName;
    protected $address;
    protected $phoneNumber;

    public function __construct($name, $address, $phone) {
        $this->companyName = $name;
        $this->address = $address;
        $this->phoneNumber = $phone;
    }

    public function displayCompany() {
      
        echo "会社名: " . $this->companyName . "\n";
        echo "住所: " . $this->address . "\n";
        echo "電話番号: " . $this->phoneNumber . "\n";
    }
}


class Department extends Company {
   
    private $departmentName;
    private $managerName;

    public function __construct($name, $address, $phone, $deptName, $mgrName) {
        
        parent::__construct($name, $address, $phone);
        $this->departmentName = $deptName;
        $this->managerName = $mgrName;
    }

    public function displayDepartment() {
        echo "部署名: " . $this->departmentName . "\n";
        echo "部長: " . $this->managerName . "\n";
       
        echo "\n"; 
    }

    public function displayAll() {
        $this->displayCompany();
        $this->displayDepartment();
    }
}

$companyA = new Department("サンプルA", "市ヶ谷", "080-XXXX-XXXX", "人事", "高田");
$companyB = new Department("サンプルB", "池袋", "090-XXXX-XXXX", "総務", "田中");
$companyC = new Department("サンプルC", "新宿", "070-XXXX-XXXX", "営業", "高橋");

$companies = array($companyA, $companyB, $companyC);

foreach ($companies as $company) {
    $company->displayAll();
}
?>