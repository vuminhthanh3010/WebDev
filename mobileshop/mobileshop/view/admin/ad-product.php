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
                        <li><a href='?action=logout'><i class="fa fa-sign-out fa-fw"></i> Đăng xuất</a>
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
                            <a href="?action=adcompany"><i class="fa fa-plus fa-fw"></i>Hãng sản xuất</a>
                        </li>
                        <li>
                            <a href="?action=adproduct"><i class="fa fa-table fa-fw"></i>Sản phẩm</a>
                        </li>
                        <li>
                            <a href="?action=admember"><i class="fa fa-users fa-fw"></i>Thành viên</a>
                        </li> 
                        
                        
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>
        <section id="page-wrapper">
            <div class="row">
                <div class="col-xs-12">
                    <h3 class="alert alert-info" >Sản phẩm đang bán</h3>
                    <a href="?action=adminaddproduct" class="btn btn-primary pull-right">Thêm sản phẩm mới</a>
                </div>
                <div class="col-xs-12 table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Mã sản phẩm</th>
                          <th>Tên sản phẩm</th>
                          <th>Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php
                            $ad = new m_product();
                            $admin = $ad->get_product();
                            $stt = 1;
                            while ($set = $admin->fetch()) {
                        ?>
                        <tr>
                          <th scope="row"><?php echo $stt++; ?></th>
                          <td><?php echo $set[0]; ?></td>
                          <td><?php echo $set[1] ?></td>
                          <td>
                              <a href="?action=editproduct&id=<?php echo $set[0]; ?>" class="btn btn-success">Sửa</a>
                              <a href="?action=deleteproduct&id=<?php echo $set[0]; ?>" class="btn btn-danger">Xóa</a>
                          </td>
                        </tr>
                        <?php } ?>
                      </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
    <!-- /#wrapper -->

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
