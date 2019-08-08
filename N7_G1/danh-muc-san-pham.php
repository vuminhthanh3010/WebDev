<?php 

	require_once __DIR__."/autoload/autoload.php";  
	$id = intval(inputGet("id"));
	$hasCate = $db ->fetchID("categories",$id);
	if(empty($hasCate)){
		$_SESSION['error']="Danh muc khong ton tai";
		redirectModules("categories");
	}

	//phan trang
	if(isset($_GET['p'])){
		$p= $_GET['p'];
	}else{
		$p = 1;
	}
	$sql = "SELECT * FROM products WHERE category_id=$id";
	$productcate = $db -> fetchsql($sql);
	
	$total = count($db -> fetchsql($sql));
	
	$product = $db -> Pagination("products",$sql,$total,$p,2,true);
	
	$sotrang = $product['page'];
	
	unset($product['page']);

	$path = $_SERVER['SCRIPT_NAME'];
?>

<?php  require_once __DIR__."/layouts/header.php";  ?>
<div class="col-md-9 bor">
	<section id="slide" class="text-center" >
		<img src="public/frontend/images/slide2.png" class="img-thumbnail">
		<br>
	</section>
	<section class="box-main1">
		
		<div class="boxtitle">
			<div class="heading_title"><?php echo $hasCate['name'] ?></div>
			<p> <span class="bg_title"></span></p>
		</div>
		<div class="showitem clearfix">
			<?php foreach ($productcate as  $item):?>
				<div class="col-md-3 item-product bor">
					<a href="chi-tiet-san-pham.php?id=<?php echo $item['id'] ?>">
						<img src="<?php echo uploads()?>/products/<?php echo $item['thumbnail'] ?>" class="" width="100%" height="180">
					</a>
					<div class="info-item">
						<a href="chi-tiet-san-pham.php?id=<?php echo $item['id'] ?>"><?php echo $item['name'] ?></a>
						<p><strike class="sale"><?php echo $item['price'] ?></strike> <b class="price"><?php echo $item['sale'] ?></b></p>
					</div>
					<div class="hidenitem">
						<p><a href="chi-tiet-san-pham.php?id=<?php echo $item['id'] ?>"><i class="fa fa-search"></i></a></p>
						<p><a href=""><i class="fa fa-heart"></i></a></p>
						<p><a href=""><i class="fa fa-shopping-basket"></i></a></p>
					</div>
				</div>
			<?php endforeach;?>
			
		</div>
		<div class="clearfix text-center">
			<nav aria-label="...">
				<ul class="pagination justify-content-center">
					<?php for ($i=1; $i <= $sotrang ; $i++) :?>
						<li class="page-item <?php echo isset($_GET['p']) && $_GET['p'] == $i ? 'active' : '' ?>">
							<a class="page-link" href="<?php echo $path ?>?id=<?= $id; ?>&&p=<?= $i ?>"><?= $i ?></a>
						</li>
					<?php endfor; ?>					
					
				</ul>
			</nav>
		</div>
	</section>
</div>
<?php  require_once __DIR__."/layouts/footer.php";  ?>

