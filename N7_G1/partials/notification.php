<?php if(isset($_SESSION['success'])): ?>
                <div class="alert alert-success col-md-12 text-center">
                    <?php echo $_SESSION['success']; unset($_SESSION['success']);?>                        
                </div>
<?php endif; ?>

<?php if(isset($_SESSION['error'])): ?>
                <div class="alert alert-danger col-md-12 text-center">
                    <?php echo $_SESSION['error']; unset($_SESSION['error']);?>                        
                </div>
<?php endif; ?>       