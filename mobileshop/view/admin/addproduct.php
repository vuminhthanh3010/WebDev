<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Admin - UbuntuShop</title>
    <link href="../controller/css/style.css" rel="stylesheet">

    <!-- Bootstrap Core CSS -->
    <link href="../controller/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../controller/css/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../controller/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../controller/css/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../controller/font/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="?action=home">Admin - UbuntuShop</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Trần Đăng Lâm</strong>
                                    <span class="pull-right text-muted">
                                        <em>Hôm nay</em>
                                    </span>
                                </div>
                                <div>Báo giá cho tối chiếc IPhone 7 Plus</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Quang Hoàng</strong>
                                    <span class="pull-right text-muted">
                                        <em>Hôm nay</em>
                                    </span>
                                </div>
                                <div>Cho tôi xin địa chỉ và số tài khoản ngân hàng của Shop?</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Đăng Tuấn</strong>
                                    <span class="pull-right text-muted">
                                        <em>Hôm qua</em>
                                    </span>
                                </div>
                                <div>Máy tôi gặp vấn đề, tôi muốn đổi trả lại</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Đọc tất cả tin nhắn</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Uy Tín</strong>
                                        <span class="pull-right text-muted">100% Hoàn thành</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                            <span class="sr-only">100% Hoàn thành</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Trách Nhiệm</strong>
                                        <span class="pull-right text-muted">90% Hoàn thành</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                                            <span class="sr-only">90% Hoàn thành</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Năng Động</strong>
                                        <span class="pull-right text-muted">90% Hoàn thành</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%">
                                            <span class="sr-only">90% Hoàn thành</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Nhiệt Huyết</strong>
                                        <span class="pull-right text-muted">95% Hoàn thành</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 95%">
                                            <span class="sr-only">95% Hoàn thành</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Xem tất cả mục tiêu</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-tasks -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-comment fa-fw"></i> Bình luận mới
                                    <span class="pull-right text-muted small">4 phút trước</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-twitter fa-fw"></i> 3 Người theo dõi mới
                                    <span class="pull-right text-muted small">12 phút trước</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-envelope fa-fw"></i> Đã gửi tin nhắn
                                    <span class="pull-right text-muted small">
                                    5 phút trước</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-tasks fa-fw"></i> Câu hỏi mới
                                    <span class="pull-right text-muted small">15 phút trước</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-upload fa-fw"></i> Đã khởi động lại máy chủ
                                    <span class="pull-right text-muted small">4 Ngày trước</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Xem tất cả thông báo</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-alerts -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> Thông tin tài khoản</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Cài đặt</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="#"><i class="fa fa-sign-out fa-fw"></i> Đăng xuất</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search text-center">
                            <div class="input-group custom-search-form">
                                <img src="../controller/images/admin3.png" class="img-circle" width="100px" height="100px">
                                <h4 class="text-info bg-info" style="padding:15px; width: 100%;">Group 15 - Admin</h4>
                            </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="?action=admin"><i class="fa fa-dashboard fa-fw"></i>Tổng quan</a>
                        </li>
                        <li>
                            <a href="?action=adproduct"><i class="fa fa-table fa-fw"></i>Sản phẩm</a>
                        </li>
                        <li>
                            <a href="?action=admember"><i class="fa fa-users fa-fw"></i>Thành viên</a>
                        </li>   
                        <li>
                            <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i>Thống kê<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="#">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="#">Morris.js Charts</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
    </div>
    <!-- /#wrapper -->
    <section id="page-wrapper">
            <div class="row">
                <div class="col-xs-12">
                    <h3 class="alert alert-info" >Thêm sản phẩm</h3>
                </div>
                <div class="col-xs-12">
                    <form action="?action=adminadd" method="post" enctype='multipart/form-data'>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputEmail4" class="col-form-label">Tên sản phẩm</label>
                          <input type="text" class="form-control" name="name">
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputPassword4" class="col-form-label">Giá</label>
                          <input type="number" class="form-control" name="price">
                        </div>
                      </div>
                      <div class="form-row col-md-12" style="padding-left: 0;">
                        <div class="form-group col-md-3">
                            <label for="inputAddress" class="col-form-label">Hình ảnh</label>
                            <input type="file" class="form-control" name="img" required>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputAddress" class="col-form-label">Hãng</label>
                            <select class="form-control" name="brand">
                                <?php
                                    $x = new m_product();
                                    $brand = $x->get_brand();
                                    while ($set = $brand->fetch()) {
                                ?>
                                <option value="<?php echo $set[0]; ?>"><?php echo $set[1]; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-3">
                          <label for="inputCity" class="col-form-label">Screen</label>
                          <input type="text" class="form-control" name="screen">
                        </div>
                        <div class="form-group col-md-3">
                          <label for="inputState" class="col-form-label">Camera</label>
                          <input type="text" class="form-control" name="camera">
                        </div>
                        <div class="form-group col-md-3">
                          <label for="inputZip" class="col-form-label">Pin</label>
                          <input type="text" class="form-control" name="pin">
                        </div>
                        <div class="form-group col-md-3">
                          <label for="inputZip" class="col-form-label">Hệ điều hành</label>
                          <input type="text" class="form-control" name="os">
                        </div>
                      </div>
                      <div class="form-group">
                      </div>
                      <button type="submit" class="btn btn-primary">Thêm sản phẩm</button>
                    </form>
                </div>
            </div>
        </section>
    <!-- jQuery -->
    <script src="../controller/js/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../controller/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../controller/js/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../controller/js/raphael.min.js"></script>
    <script src="../controller/js/morris.min.js"></script>
    <script src="../controller/js/morris-data.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../controller/js/sb-admin-2.js"></script>

</body>

</html>